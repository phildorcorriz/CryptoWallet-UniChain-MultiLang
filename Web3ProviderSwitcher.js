class Web3ProviderSwitcher {
    constructor() {
        this.providers = {
            ETH: "https://rpc.ankr.com/eth",
            BSC: "https://bsc-dataseed.binance.org",
            POLYGON: "https://polygon-rpc.com"
        };
    }

    setProvider(chain) {
        this.current = this.providers[chain] || null;
    }

    getCurrentProvider() {
        return this.current;
    }
}

const switcher = new Web3ProviderSwitcher();
switcher.setProvider("BSC");
console.log("=== Web3供应商切换器 ===");
console.log("当前RPC:", switcher.getCurrentProvider());
