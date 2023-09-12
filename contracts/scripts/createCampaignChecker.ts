const { ethers} = require("hardhat");

async function main() {
    const [deployer, receiver] = await ethers.getSigners();

    const DonationContract = await ethers.getContractFactory("DonationPlatformContract");
    const contract = await DonationContract.deploy();
    await contract.waitForDeployment();

    // grant role 
    try {
        const creatorRole = await contract.CAMPAIGN_CREATOR() 
        await contract.grantRole(creatorRole, receiver.address);
    } catch (error) {console.log(error);}

  // Define your CreateProposalDto object here
  const proposalDTO = {
    receiverAddress: receiver.address,
    title: "Your Proposal Title",
    description: "Your Proposal Description",
    endTime: Math.floor(Date.now() / 1000) + 24 * 3600, // Tomorrow at the same time
    amountRequested: 500,
  };

    let tx: any;
    let receipt: any;
    let proposalAddress: string = ''; 
    // write to contract
    const fee = calculateFee(proposalDTO.amountRequested);
    console.log(fee);
    try {
        tx = await contract.createCampaign(
            proposalDTO.receiverAddress,
            // IPFS set to empty for now 
            'empty',
            proposalDTO.amountRequested,
            proposalDTO.endTime
        )
    receipt = await tx.wait();
    let size = await contract.getReceiverCampaignsSize(proposalDTO.receiverAddress);
    size = Number(size.toString());
    console.log(size);
    size = Number(size);
    console.log(size);
    proposalAddress = await contract.getReceiverCampaignByIndex(
        proposalDTO.receiverAddress, Number(Math.max(0, size - 1)));
    
    console.log(proposalAddress);
    //proposalAddress = receipt.logs[0].args[2]; // event CampaignCreated
    } catch (error) {console.log(error);}

    // transform into schema 
    const schemaFormat = {
        proposalAddress: proposalAddress,
        receiverAddress: proposalDTO.receiverAddress,
        title: proposalDTO.title,
        description: proposalDTO.description,
        endtime: proposalDTO.endTime,
        amountRequested: proposalDTO.amountRequested,
        fundsRaised: 0,
        open: true,
        success: false
    }
    console.log(schemaFormat);
    console.log(`Proposal transaction hash: ${tx.hash}`);
    return;
}


function calculateFee(amountRequesting: number): number | string {
    const minFee: number = 1;
    const maxFee: number = 10;
    const minAmount: number = 100;
    const maxAmount: number = 1_000_000;
    if (amountRequesting < minAmount || amountRequesting > maxAmount) {
      return 'Failed'
    }

    // Calculate the fee percentage using a logarithmic relationship
    const feePercentage: number =
      maxFee + (minFee - maxFee) * (Math.log(amountRequesting) / Math.log(maxAmount));

    // Ensure the fee percentage is within the valid range
    const fee: number = Math.max(minFee, Math.min(Math.round(feePercentage), maxFee));

    return fee;
  }

main().catch((error) => {
    console.log(error);
    process.exitCode = 1; 
})

