const abiDecoder = require('abi-decoder');

const testAbi = [{
    "name": "transfer",
    "type": "function",
    "inputs": [{"type": "address"},{"type": "uint256"}]
}];

abiDecoder.addABI(testAbi);

const txData = "0xa9059cbb0000000000000000000000001234567890123456789012345678901234567890000000000000000000000000000000000000000000000000000000000000000f";
const decoded = abiDecoder.decodeMethod(txData);

console.log("=== ABI解码器工具 ===");
console.log(decoded);
