// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./donation.sol";

contract DonationPlatformContract is AccessControl { 

    bytes32 public constant CAMPAIGN_CREATOR = keccak256("CAMPAIGN_CREATOR");

    // @notice holds all address that have at least 1 campaign
    address[] receivers;

    // @notice track all campaigns contract addresses of each user 
    mapping(address => address[]) public campaignsAddress;

    // @dev control creation of every new campaign 
    event CampaignCreated(address admistrator, address receiver, address campaignsAddress);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(CAMPAIGN_CREATOR, msg.sender);
        // @note: contract Creator cant create campaigns. remove type defaults 
    }

    /**
     * @notice Create a new campaign for a user 
     * @notice If the receiver creates a new campaign before collecting the previous one in case of success 
     * or before all donators having done so in case of failure, it can still be collected; however, not 
     * using campaignsAddress mapping 
     * 
     * @dev Creator must be admin and the user who will be the campaign receiver must have the campaign role
     * given after identity confirmation. The receiver also needs a week delay for a new campaign
     */
    function createCampaign(
        //uint256 _fee,
        address _campaignReceiver,
        string memory _campaignIpfs,
        uint256 _amountRequesting,
        uint256 _campaignEndTime
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(hasRole(CAMPAIGN_CREATOR, _campaignReceiver), "Receiver not confirmed");
        uint256 nCampaigns = getReceiverCampaignsSize(_campaignReceiver);
        if (nCampaigns > 0) {
            // Check if the last campaign has ended and the necessary time has passed.
            DonationContract campaignContract = DonationContract(
                payable(campaignsAddress[_campaignReceiver][nCampaigns - 1]));
            require(
                // 1 weeks
                block.timestamp > campaignContract.campaignEndTime() + 1 seconds &&
                !campaignContract.campaignOpen(),
                "Cant create a new campaign yet"
            );
        }
        else {
            // first contract 
            receivers.push(_campaignReceiver);
        }
        // Deploy a new contract and store its address
        DonationContract newCampaign = new DonationContract(
            _campaignReceiver, _campaignIpfs, _amountRequesting, _campaignEndTime
        );
        campaignsAddress[_campaignReceiver].push(address(newCampaign));
        emit CampaignCreated(msg.sender, _campaignReceiver, address(newCampaign));
    }
    
    //@notice get number of campaigns that user has and had 
    function getReceiverCampaignsSize(address receiver) view public returns (uint256){
        return campaignsAddress[receiver].length;
    }

    //@notice get campaign contract address of a certain address 
    function getReceiverCampaignByIndex(address receiver, uint256 index) view public returns (address){
        require(index < getReceiverCampaignsSize(receiver));
        return campaignsAddress[receiver][index];
    }

}
