const crypto = require('crypto');

const wordlist = [
    "apple", "banana", "cherry", "date", "elder", "fig", "grape", "honey",
    "ice", "juice", "kiwi", "lemon", "mango", "nut", "orange", "peach"
];

function generateMnemonic(length = 12) {
    let mnemonic = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, wordlist.length);
        mnemonic.push(wordlist[randomIndex]);
    }
    return mnemonic.join(" ");
}

function mnemonicToSeed(mnemonic) {
    const hash = crypto.createHash('sha512').update(mnemonic).digest('hex');
    return hash.slice(0, 64);
}

console.log("=== 助记词生成器 ===");
const phrase = generateMnemonic();
console.log("助记词:", phrase);
console.log("种子:", mnemonicToSeed(phrase));
