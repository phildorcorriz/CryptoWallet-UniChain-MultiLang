const crypto = require('crypto');

function offlineSignTx(privateKey, txDetails) {
    const txString = JSON.stringify(txDetails);
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(txString);
    sign.end();
    const signature = sign.sign(privateKey, 'hex');
    return {
        raw_tx: txString,
        signature: signature,
        signed_at: new Date().toISOString()
    };
}

const tx = { to: "0xabc", value: "0x1000", nonce: 5 };
const signed = offlineSignTx(crypto.randomBytes(32).toString('hex'), tx);

console.log("=== 离线交易签名器 ===");
console.log(signed);
