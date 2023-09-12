
import { expect } from "chai";
import { ethers } from "hardhat";

describe("DonationContract", function () {
  it("Create Campaign", async function () {
    // Deploy the contract
    const DonationContract = await ethers.getContractFactory("DonationPlatformContract");
    const [deployer, receiver, donor] = await ethers.getSigners(); // Get signers

    // Deploy the contract with account 1 (deployer) as the receiver
    const donationContract = await DonationContract.deploy();
    await donationContract.waitForDeployment();

    
    expect(balance).to.equal(0); 

    const requested = await donationContract.amountRequesting();
    console.log("requested:", requested.toString());
    expect(requested).to.equal(200); 


    // Donate with account 3 (donor)
    const donationAmount = 200;
    expect(donationAmount + Number(balance)).to.be.lessThanOrEqual(requested);
    const donateTx = await donationContract.connect(donor).donate({ value: donationAmount });
    await donateTx.wait();
    console.log("Donation Transaction Hash:", donateTx.hash);

    const missingBalanceAfter = await donationContract.missingBalanceToTarget();
    console.log("Missing Balance to Target:", missingBalanceAfter.toString());
    expect(missingBalanceAfter).to.equal(0); 

    const Balance = await donationContract.currentBalance();
    console.log("Balance:", Balance.toString());
    expect(Balance).to.equal(200); 
  });
});
