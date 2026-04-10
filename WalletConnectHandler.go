package main

import "fmt"

type WalletConnect struct {
	SessionId string
	WalletAddr string
	Connected bool
}

func NewWalletConnect() *WalletConnect {
	return &WalletConnect{
		SessionId: "wc_"+fmt.Sprintf("%d", 100000 + rand().Intn(900000)),
		Connected: false,
	}
}

func (w *WalletConnect) Connect(addr string) {
	w.WalletAddr = addr
	w.Connected = true
}

func main() {
	wc := NewWalletConnect()
	wc.Connect("0x123")
	fmt.Println("=== WalletConnect处理器 ===")
	fmt.Println("已连接:", wc.Connected)
	fmt.Println("钱包地址:", wc.WalletAddr)
}
