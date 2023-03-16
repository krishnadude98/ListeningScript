const contract= require("./SocialMedia.json");
var Web3 = require('web3');
var web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/AnyZoV7fyibMYSAKeHzXAlEjUQ8QOtFn');
const address="0x70ea858706db44c29553917bf0d5df96964d835b"
var MyContract = new web3.eth.Contract(contract.abi, address);

console.log("listening for create post events")
MyContract.once("NewPost", async function (error, event) {
        console.log("new post event happened");
        if(!error) {
            console.log(event);
        }
        else{
            console.log(error);
        }
        
    });

