const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'AISJIM2341234K132MR0ERIFJ';
const currentBlockData = [
    {
        amount: 10,
        sender: 'AISDMSIAMDASD',
        recipient: 'AISDMOMG0IRGMER'
    },
    {
        amount: 30,
        sender: 'AISDMSASDFDASD',
        recipient: 'OMKNMGIAAWNERG'
    },
    {
        amount: 100,
        sender: 'WRQEFEFTHFDASD',
        recipient: 'OMKASVFDBRGHTRIWNERG'
    }
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 286979));



