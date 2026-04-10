const axios = require('axios');

async function getGasPrice(chain) {
    const url = chain === "ETH"
        ? "https://api.etherscan.io/api?module=gastracker&action=gasoracle"
        : "https://api.bscscan.com/api?module=gastracker&action=gasoracle";
    
    const res = await axios.get(url);
    return res.data.result;
}

async function main() {
    const gas = await getGasPrice("ETH");
    console.log("=== Gas价格预言机 ===");
    console.log("当前Gas:", gas);
}
main();
