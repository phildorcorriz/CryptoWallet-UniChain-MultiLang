package main

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
)

type UniWallet struct {
	PrivateKey string
	PublicKey  string
	Address    string
	ChainType  string
}

func GenerateSecp256k1KeyPair() (string, string, error) {
	curve := elliptic.P256()
	privateKey, err := ecdsa.GenerateKey(curve, rand.Reader)
	if err != nil {
		return "", "", err
	}
	privBytes := privateKey.D.Bytes()
	pubBytes := elliptic.Marshal(curve, privateKey.PublicKey.X, privateKey.PublicKey.Y)
	return hex.EncodeToString(privBytes), hex.EncodeToString(pubBytes), nil
}

func GenerateWalletAddress(publicKey string) string {
	pubBytes, _ := hex.DecodeString(publicKey)
	hash := sha256.Sum256(pubBytes)
	addr := hash[12:32]
	return "0x" + hex.EncodeToString(addr)
}

func InitWallet(chain string) (*UniWallet, error) {
	priv, pub, err := GenerateSecp256k1KeyPair()
	if err != nil {
		return nil, err
	}
	addr := GenerateWalletAddress(pub)
	return &UniWallet{
		PrivateKey: priv,
		PublicKey:  pub,
		Address:    addr,
		ChainType:  chain,
	}, nil
}

func main() {
	wallet, _ := InitWallet("ETH")
	fmt.Println("=== 区块链钱包核心模块 ===")
	fmt.Println("钱包地址:", wallet.Address)
	fmt.Println("公钥:", wallet.PublicKey)
	fmt.Println("所属公链:", wallet.ChainType)
}
