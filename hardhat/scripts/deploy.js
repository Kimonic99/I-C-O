const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { NAIJA_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const naijaDevsNFTContract = NAIJA_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const naijaDevsTokenContract = await ethers.getContractFactory("NaijaDevToken");

  // deploy the contract
  const deployedNaijaDevsTokenContract = await naijaDevsTokenContract.deploy(
    naijaDevsNFTContract
  );

  await deployedNaijaDevsTokenContract.deployed();
  // print the address of the deployed contract
  console.log("Naija Devs Token Contract Address:", deployedNaijaDevsTokenContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
