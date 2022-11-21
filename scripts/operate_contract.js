async function main() {

    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();

    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "s",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "t",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                }
            ],
            "name": "Tran",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "a",
                    "type": "address"
                }
            ],
            "name": "airdrop",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "a",
                    "type": "address"
                }
            ],
            "name": "getAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "a",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "v",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    const addr = "0x81Cb10396BdfCc881cdcf33E2e5B702fc9bB2593"
    const con = new ethers.Contract(addr, abi, provider)

    const consiggner = con.connect(signer)
    await consiggner.airdrop("0x0b988f838b41C972773130e2e6088D99Ca21E4DF")
    console.log(await con.getAmount("0x0b988f838b41C972773130e2e6088D99Ca21E4DF"))
    await consiggner.transfer("0xDe18f151fFB23811D7C44F4eB84cA4B242f6A9EF", 999)
    console.log(await con.balances("0xDe18f151fFB23811D7C44F4eB84cA4B242f6A9EF"))
    console.log(await con.balances("0x0b988f838b41C972773130e2e6088D99Ca21E4DF"))




    // console.log("contract address:", st.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });