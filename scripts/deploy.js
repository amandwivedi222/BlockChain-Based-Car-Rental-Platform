const { ethers } = require("hardhat");
async function main() {
  const CarRental = await ethers.getContractFactory("CarRental");
  const carRental = await CarRental.deploy();

  const cr = await carRental.deployed();

  console.log("CarRental contract deployed to:", cr.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
