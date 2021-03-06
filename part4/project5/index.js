if (typeof web3 != "undefined") {
  web3 = new Web3(web3.currentProvider); // what Metamask injected
} else {
  // Instantiate and set Infura as provider
  web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/8f06b06788e046f9ba989b606c0574f1"
    )
  );
}
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        web3 = new Web3(
            new Web3.providers.HttpProvider(
                "https://rinkeby.infura.io/v3/8f06b06788e046f9ba989b606c0574f1"
            )
        );
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

if (window.web3){

// The interface definition for your smart contract (the ABI)
    var StarNotary = web3.eth.contract([
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_owner",
                    type: "address"
                },
                {
                    indexed: true,
                    name: "_operator",
                    type: "address"
                },
                {
                    indexed: false,
                    name: "_approved",
                    type: "bool"
                }
            ],
            name: "ApprovalForAll",
            type: "event"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_approved",
                    type: "address"
                },
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "approve",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "buyStar",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "story",
                    type: "string"
                },
                {
                    name: "dec",
                    type: "string"
                },
                {
                    name: "mag",
                    type: "string"
                },
                {
                    name: "cent",
                    type: "string"
                },
                {
                    name: "tokenId",
                    type: "uint256"
                }
            ],
            name: "createStar",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "mint",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256"
                },
                {
                    name: "_price",
                    type: "uint256"
                }
            ],
            name: "putStarUpForSale",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_from",
                    type: "address"
                },
                {
                    indexed: true,
                    name: "_to",
                    type: "address"
                },
                {
                    indexed: true,
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "Transfer",
            type: "event"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_operator",
                    type: "address"
                },
                {
                    name: "_approved",
                    type: "bool"
                }
            ],
            name: "setApprovalForAll",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "_owner",
                    type: "address"
                },
                {
                    indexed: true,
                    name: "_approved",
                    type: "address"
                },
                {
                    indexed: true,
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "Approval",
            type: "event"
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_from",
                    type: "address"
                },
                {
                    name: "_to",
                    type: "address"
                },
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "transferFrom",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address"
                }
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "coordsString",
                    type: "string"
                }
            ],
            name: "checkIfStarExists",
            outputs: [
                {
                    name: "",
                    type: "bool"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "getApproved",
            outputs: [
                {
                    name: "",
                    type: "address"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address"
                },
                {
                    name: "_operator",
                    type: "address"
                }
            ],
            name: "isApprovedForAll",
            outputs: [
                {
                    name: "",
                    type: "bool"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_tokenId",
                    type: "uint256"
                }
            ],
            name: "ownerOf",
            outputs: [
                {
                    name: "",
                    type: "address"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "",
                    type: "uint256"
                }
            ],
            name: "starsForSale",
            outputs: [
                {
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        },
        {
            constant: true,
            inputs: [
                {
                    name: "",
                    type: "uint256"
                }
            ],
            name: "tokenIdToStarInfo",
            outputs: [
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "story",
                    type: "string"
                },
                {
                    name: "coordsString",
                    type: "string"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        }
    ]);
// Grab the contract at specified deployed address with the interface defined by the ABI
    var starNotary = StarNotary.at("0xd7bd75459e31151ab54164a6fa1cd8729c8f26be");

// uses my own address if the user does not have an account
    var accounts = web3.eth.accounts[0];

// creates a new star, returns star value after function is done
    const newStar = async (name, story, dec, mag, cent, tokenId) => {
        // creates star with the provided name, and tokenId, from the first account.
        await starNotary.createStar(
            name,
            story,
            dec,
            mag,
            cent,
            tokenId,
            {
                from: accounts
            },
            function(error, result) {
                if (!error) {
                    console.log("transaction Hash", result);
                    document.getElementById("starStatus").innerHTML =
                        `Star created! ${[name, story, dec, mag, cent, tokenId]}`;
                    console.log(`Star created! ${[name, story, dec, mag, cent, tokenId]}`)
                    return result;
                } else {
                    console.log(error);
                }
            }
        );
    };

// returns the meta values of the star
    const tokenIdToStarInfo = async tokenId => {
        return new Promise(async (resolve, reject) =>{
            await starNotary.tokenIdToStarInfo(tokenId, function(error, result) {
                if (!error) {
                    console.log('RESULT:', result);
                    resolve(result);
                } else {
                    console.log(error);
                }
            });
        })
            .then((results) =>{
                return results;
            })

    };

// handles the fetching of star data
    async function handleStarLookup(e) {
        e.preventDefault();

        let tokenId = document.getElementById('tokenLookup').value;

        // creates the star, returns the values of the tokens
        let results = await tokenIdToStarInfo(tokenId);
        document.getElementById("starInfo").innerHTML = "Loading...";
        if (results) {
            document.getElementById("starInfo").innerHTML = results;
            console.log("Found star:", results);
        }
    }

// handles the creation of a new star
    async function handleNewStar(e) {
        e.preventDefault();

        let name = document.getElementById('name').value,
            story = document.getElementById('story').value,
            dec = document.getElementById('dec').value,
            mag = document.getElementById('mag').value,
            cent = document.getElementById('cent').value,
            tokenId = document.getElementById('tokenId').value;

        // creates the star, returns the values of the tokens

        await newStar(name, story, dec, mag, cent, tokenId);
        console.log('Awaiting transaction confirmation...')
    }

// handles new star creation based on user input
    document
        .getElementById("newStar")
        .addEventListener("submit", handleNewStar, false);

    document
        .getElementById("findStar")
        .addEventListener("submit", handleStarLookup, false);

}