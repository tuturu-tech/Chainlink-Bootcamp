task("give-right-to-vote", "Calls the giveRightToVote function so the chairpersonc can the right to vote to voters")
    .addParam("contract", "The address of the API Consumer contract that you want to call")
    .addParam("voter", "The address of the voter you want to give the right to vote to")
    .setAction(async taskArgs => {

        const contractAddr = taskArgs.contract
        const voterAddr = taskArgs.voter
        const Ballot = await ethers.getContractFactory("Ballot")

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        //Create connection to API Consumer Contract and call the createRequestTo function
        const ballotContract = new ethers.Contract(contractAddr, Ballot.interface, signer)
        await ballotContract.

        if (result == 0 && ['hardhat', 'localhost', 'ganache'].indexOf(network.name) == 0) {
            console.log("You'll either need to wait another minute, or fix something!")
        }
        if (['hardhat', 'localhost', 'ganache'].indexOf(network.name) >= 0) {
            console.log("You'll have to manually update the value since you're on a local chain!")
        }
    })

module.exports = {}