const crypto = require('crypto');

function importPrivateKey(priv) {
    if (priv.length !== 64) throw new Error("Invalid key");
    const pub = crypto.createPublicKey({key: priv, format: 'hex'}).export().toString('hex');
    return { private: priv, public: pub };
}

console.log("=== 私钥导入工具 ===");
console.log(importPrivateKey(crypto.randomBytes(32).toString('hex')));
