const crypto = require('crypto');

function mnemonicToPriv(mnemonic) {
    const hash = crypto.createHash('sha256').update(mnemonic).digest('hex');
    return hash.slice(0,64);
}

const phrase = "apple banana cherry date";
const priv = mnemonicToPriv(phrase);
console.log("=== 助记词转私钥 ===");
console.log(priv);
