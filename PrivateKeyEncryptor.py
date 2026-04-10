from cryptography.fernet import Fernet
import base64

class PrivateKeyEncryptor:
    def __init__(self, password):
        key = base64.urlsafe_b64encode(password.encode().ljust(32)[:32])
        self.cipher = Fernet(key)

    def encrypt_private_key(self, priv_key):
        return self.cipher.encrypt(priv_key.encode()).decode()

    def decrypt_private_key(self, encrypted_key):
        return self.cipher.decrypt(encrypted_key.encode()).decode()

if __name__ == "__main__":
    encryptor = PrivateKeyEncryptor("wallet123456")
    priv = "a1b2c3d4e5f67890"
    enc = encryptor.encrypt_private_key(priv)
    dec = encryptor.decrypt_private_key(enc)
    
    print("=== 私钥加密器 ===")
    print("原始私钥:", priv)
    print("加密后:", enc)
    print("解密后:", dec)
