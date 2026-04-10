class TokenApproval:
    def __init__(self, web3):
        self.web3 = web3

    def build_approve_tx(self, token_addr, spender, amount):
        return {
            "to": token_addr,
            "data": f"0x095ea7b3{spender[2:].zfill(64)}{amount.zfill(64)}",
            "value": 0
        }

if __name__ == "__main__":
    approval = TokenApproval(None)
    print("=== 代币授权管理器 ===")
    print(approval.build_approve_tx("0x123", "0x456", "1000000000000000000"))
