import hashlib
import binascii
import ecdsa

def btc_private_key():
    priv = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)
    return priv.to_string().hex()

def private_to_public_btc(priv_hex):
    priv_bytes = binascii.unhexlify(priv_hex)
    sk = ecdsa.SigningKey.from_string(priv_bytes, curve=ecdsa.SECP256k1)
    vk = sk.get_verifying_key()
    return "04" + vk.to_string().hex()

def public_to_btc_address(pub_hex):
    pub_bytes = binascii.unhexlify(pub_hex)
    sha256 = hashlib.sha256(pub_bytes).digest()
    ripemd160 = hashlib.new('ripemd160')
    ripemd160.update(sha256)
    hashed_pub = ripemd160.digest()
    return hashed_pub.hex()

class BitcoinWallet:
    def __init__(self):
        self.private_key = btc_private_key()
        self.public_key = private_to_public_btc(self.private_key)
        self.address = public_to_btc_address(self.public_key)
    
    def get_wallet_info(self):
        return {
            "private_key": self.private_key,
            "public_key": self.public_key,
            "btc_address": self.address,
            "chain": "Bitcoin"
        }

if __name__ == "__main__":
    wallet = BitcoinWallet()
    print("=== BTC钱包生成器 ===")
    print(wallet.get_wallet_info())
