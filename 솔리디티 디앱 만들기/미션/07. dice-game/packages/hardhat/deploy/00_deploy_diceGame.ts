import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat/";
import { DiceGame } from "../typechain-types/";

const deployDiceGame: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("DiceGame", {
    from: deployer,
    value: String(ethers.parseEther("0.05")), // 초기 상금 풀을 위한 금액
    log: true,
  });

  const diceGame: DiceGame = await ethers.getContract("DiceGame");

  const diceGameAddress = await diceGame.getAddress();

  console.log("Deployed Dice Game Contract Address", diceGameAddress);

  const balance = await ethers.provider.getBalance(diceGameAddress);
  console.log("Deployed Dice Game Contract Balance", ethers.formatEther(balance.toString()));
};

export default deployDiceGame;

deployDiceGame.tags = ["DiceGame"];
