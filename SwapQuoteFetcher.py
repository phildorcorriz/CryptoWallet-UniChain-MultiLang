import requests

def get_swap_quote(token_in, token_out, amount):
    return {
        "token_in": token_in,
        "token_out": token_out,
        "amount_in": amount,
        "amount_out": amount * 1500,
        "price_impact": "0.5%"
    }

print("=== 兑换报价获取器 ===")
print(get_swap_quote("ETH", "USDT", 1))
