class ChainIdDetector:
    def __init__(self):
        self.chains = {
            "ETH": 1,
            "BSC": 56,
            "POLYGON": 137,
            "TRON": 195,
            "SOLANA": 501
        }

    def get_chain_id(self, chain_name):
        return self.chains.get(chain_name.upper(), 0)

    def detect_chain_by_rpc(self, rpc_url):
        if "eth" in rpc_url:
            return 1
        elif "bsc" in rpc_url:
            return 56
        else:
            return -1

if __name__ == "__main__":
    detector = ChainIdDetector()
    print("=== 链ID检测器 ===")
    print("ETH ID:", detector.get_chain_id("ETH"))
    print("RPC检测:", detector.detect_chain_by_rpc("https://bsc-rpc.com"))
