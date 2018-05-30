const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(123324,'ASDIM34IRM02', '123IEWMF013FQEFO');
bitcoin.createNewTransaction(100, 'ALEXKASODNQ', 'JENMQOWINR1');
bitcoin.createNewBlock(92412312424,'ASDMDMVOIA02M', 'ASMKVMIVAMODKF');
bitcoin.createNewTransaction(100, 'ALEXKASODNQ', 'JENMQOWINR1');
bitcoin.createNewTransaction(100, 'ALEXKASODNQ', 'JENMQOWINR1');
bitcoin.createNewTransaction(100, 'ALEXKASODNQ', 'JENMQOWINR1');
bitcoin.createNewBlock(92412312424,'ASDMDMVOIA02M', 'ASMKVMIVAMODKF');


console.log(bitcoin.chain[2]);