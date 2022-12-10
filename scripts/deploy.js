// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const { ethers } = require("hardhat");
const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");

  const MapCore = await ethers.getContractFactory("MapCore");

  const Hello_World = await ethers.getContractFactory("HelloWorld");

  const token = await Token.deploy();
  const mapCore = await MapCore.deploy();
  const helloWorld = await Hello_World.deploy("Test");

  await token.deployed();
  await mapCore.deployed();
  await helloWorld.deployed();

  console.log("Token address:", token.address);
  console.log("MapCore address:", mapCore.address);
  console.log("Hello world address:", helloWorld.address);


  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token);

  saveFrontendFiles_Map(mapCore);

  saveFrontendFiles_HelloWorld(helloWorld);
}

function saveFrontendFiles_HelloWorld(helloWorld) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend_updated", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "helloWorld-address.json"),
    JSON.stringify({ Token: helloWorld.address }, undefined, 2)
  );

  const helloWorldArtifact = artifacts.readArtifactSync("HelloWorld");

  fs.writeFileSync(
    path.join(contractsDir, "HelloWorld.json"),
    JSON.stringify(helloWorldArtifact, null, 2)
  );
}


function saveFrontendFiles_Map(mapCore) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend_updated", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "mapcore-address.json"),
    JSON.stringify({ Token: mapCore.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("MapCore");

  fs.writeFileSync(
    path.join(contractsDir, "MapCore.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}


function saveFrontendFiles(token) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend_updated", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Token");

  fs.writeFileSync(
    path.join(contractsDir, "Token.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
