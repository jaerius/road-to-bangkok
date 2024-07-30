const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const privateKey = '78babec06620694739c4b611315aad4c6c92514e524a49759f1df8a778a34ab2'
const keyPair = ec.keyFromPrivate(privateKey)

const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);