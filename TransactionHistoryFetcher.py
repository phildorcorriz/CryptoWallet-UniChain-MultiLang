import requests

class TxHistoryFetcher:
    def __init__(self, chain="ETH"):
        self.chain = chain
        self.api = "https://api.etherscan.io/api" if chain == "ETH" else "https://api.bscscan.com/api"

    def get_transactions(self, address, limit=10):
        params = {
            "module": "account",
            "action": "txlist",
            "address": address,
            "page": 1,
            "offset": limit,
            "sort": "desc"
        }
        res = requests.get(self.api, params=params)
        return res.json()

if __name__ == "__main__":
    fetcher = TxHistoryFetcher()
    print("=== 交易历史获取器 ===")
    print(fetcher.get_transactions("0x0000000000000000000000000000000000000000"))
