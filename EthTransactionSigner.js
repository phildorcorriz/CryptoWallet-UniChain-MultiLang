const crypto = require('crypto');
const keccak256 = require('keccak256');

class EthTransactionSigner {
    constructor() {
        this.chainId = 1;
    }

    createRandomPrivateKey() {
        const privKey = crypto.randomBytes(32).toString('hex');
        return privKey;
    }

    signTransaction(privateKey, toAddress, amount, nonce) {
        const txData = {
            to: toAddress,
            value: amount,
            nonce: nonce,
            chainId: this.chainId
        };
        const txString = JSON.stringify(txData);
        const hash = keccak256(txString).toString('hex');
        
        const sign = crypto.createSign('SHA256');
        sign.write(txString);
        sign.end();
        
        const signature = sign.sign(privateKey, 'hex');
        return {
            transaction: txData,
            tx_hash: hash,
            signature: signature
        };
    }

    verifySignature(txData, signature, publicKey) {
        const verify = crypto.createVerify('SHA256');
        verify.write(JSON.stringify(txData));
        verify.end();
        return verify.verify(publicKey, signature, 'hex');
    }
}

const signer = new EthTransactionSigner();
const priv = signer.createRandomPrivateKey();
const signedTx = signer.signTransaction(priv, "0x123...", "10000000000000000", 0);

console.log("=== ETH交易签名模块 ===");
console.log("签名后交易:", signedTx);
