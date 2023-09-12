// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


/**
 * @title DonationContract
 * @dev A smart contract for accepting donations in a crowdfunding campaign.
 */
contract DonationContract {

    //@notice: The address of the platform that deployed the contract.
    address public immutable admistrator;
    
    //@notice: The address of the campaign receiver.
    address public immutable campaignReceiver;
    
    //@notice: IPFS hash for campaign details.
    string public campaignIpfs;
    
    //@notice: The total amount requested by the campaignReceiver for this campaign.
    uint256 public immutable amountRequesting;

    //@notice: The timestamp of the closing time of the donation.
    uint256 public immutable campaignEndTime;
    
    //@notice: Indicates whether the campaign is currently open.
    //@notice: to close campaign, it must have reach the full amount or time
    bool public campaignOpen = true;

    //@notice: true if the campaign is closed and reached the requested amount, false otherwise
    bool public campaignSuccess = false;

    //@notice Save the donators.
    address[] public donators;

    //@notice Track donations made by users
    mapping(address => uint256) public donations;

    /**
     * @dev Emitted when a donation is received.
     * @param sender The address of the donor.
     * @param amount The amount of the donation.
     */
    event Donation(address indexed sender, uint256 amount);

    /**
     * @dev Emitted when an anonymous donation is received.
     * @param amountToWithdraw The amount of the donation.
     */
    event UnknownDonation(uint256 amountToWithdraw);

    /**
     * @dev Emitted when the campaign ends.
     * @param campaignAddress The address of the campaign
     */
    event CampaignEnded(address indexed campaignAddress);

    // @notice: Fails when sender is not the reciever of the campaign
    modifier onlyCampaignReceiver() {
        require(msg.sender == campaignReceiver, "You are not the receiver");
        _;
    }

    // @notice: Fails when campaign is closed or the campaignEndTime is surpassed
    modifier whenCampaignOpen() {
        require(campaignOpen && block.timestamp < campaignEndTime, "Campaign ended");
        _;
    }

    // @notice: Fails when the donation value is zero, or it exceeds the campaign limit
    modifier viableDonation() {
        require(msg.value > 0, "The donation value must be greater than zero");
        require(address(this).balance <= amountRequesting, "Donation exceeds the amount requested");
        _;
    }

    // @notice: Fails when the timestamp is not 24h in the future
    modifier viableTimestamp(uint256 endTime) {
        require(endTime > block.timestamp +  60 seconds, "Campaign must be live for at least 24 hours");
        _;
    }

    /**
     * @dev Constructor to initialize the DonationContract.
     * @notice it has to be the platform to deploy the contract 
     * @param _campaignReceiver The address of the campaign receiver.
     * @param _campaignIpfs The IPFS hash for campaign details.
     * @param _amountRequesting The total amount requesting in the campaign.
     * @param _campaignEndTime The timestamp when the campaign ends.
     */
    constructor (
        address _campaignReceiver,
        string memory _campaignIpfs,
        uint256 _amountRequesting,
        uint256 _campaignEndTime
    ) viableTimestamp(_campaignEndTime) {

        require(_amountRequesting > 0, "The amount requested must be greater than zero");
        require(msg.sender != _campaignReceiver);
        admistrator = msg.sender;
        campaignReceiver = _campaignReceiver;
        campaignIpfs = _campaignIpfs;
        amountRequesting = _amountRequesting;
        campaignEndTime = _campaignEndTime;
    }

    /**
     * @notice Fallback function to accept anonymous donations.
     * @notice if after this transaction the campaign reaches its full amount requested, campaign ends
     */
    receive() external payable {
        require(campaignOpen && block.timestamp < campaignEndTime, "Campaign ended");
        require(msg.value > 0, "The donation value must be greater than zero");
        require(address(this).balance <= amountRequesting, "Donation exceeds the amount requested");
        donations[msg.sender] += msg.value;
        emit UnknownDonation(msg.value);
    }

    /**
     * @notice Function that allows users to make a donation.
     * @notice if after this transaction the campaign reaches its full amount requested, campaign ends
     */
    function donate() external payable whenCampaignOpen viableDonation {
        if (donations[msg.sender] == 0) {
            donators.push(msg.sender);
        }
        donations[msg.sender] += msg.value;
        emit Donation(msg.sender, msg.value);
    }

    /**
     * @notice Closes the campaign
     * @notice Allows campaign reciever to withdraw, if success
     * @notice Allows donators to cashback, if not success
     * @notice Transfers the fees to the admistrator
     * @dev Can be called by anyone. Total amout reached can also close the campaing but does this automatically
     */
    function closeCampaign() external {
        require(campaignOpen, "Campaign is already closed yet");
        campaignSuccess = address(this).balance >= amountRequesting;
        require(
            campaignSuccess || block.timestamp > campaignEndTime,
            "The campaign can not be closed");
        campaignOpen = false;
    }

    /**
     * @notice Function to withdraw donations by the campaign creator.
     * Only possible if the campaign reaches its full requested amount in donations.
     */
    function withdrawDonations() external onlyCampaignReceiver payable {
        require(!campaignOpen, "The campaign is still open");
        require(campaignSuccess, "The campaign did not reach the required amount");
        payable(campaignReceiver).transfer(address(this).balance);
    }

    /**
     * @notice get your donation back, after the end of campaign, if it failed to reach its objective
     * @dev If the campaign is not able to reach its full requested amount in the given time, then 
     * the donators are able to get their donations back
     */
    function refund() external payable {
        require(!campaignOpen, "The campaign is still open");
        require(!campaignSuccess, "The campaign reached the required amount");
        uint256 donation = donations[msg.sender];
        require(donation > 0, "No donations to withdraw");
        donations[msg.sender] = 0;
        payable(msg.sender).transfer(donation);
    }

    /**
     * @notice this calculates the amount left after the fee and the amount that is taken with the fee
     * in this case is the platform the suffers with the division (math floor) with the max lost 
     * beign fee - 1
    */
    function afterFee(uint256 amount, uint8 fee) public pure returns (uint256, uint256) {
        uint256 amountTaken = amount / fee;
        uint amountLeft =  amount - amountTaken;
        return (amountLeft, amountTaken);
    }

    //@notice returns the amount left needed to reach for the campaign to succed 
    function missingBalanceToTarget() public view returns(uint256) {
        if (address(this).balance  >= amountRequesting) {
            return  0;
        }
        return amountRequesting - address(this).balance;
    }
}