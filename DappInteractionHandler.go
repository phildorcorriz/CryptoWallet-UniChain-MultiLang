package main

import "fmt"

type DappHandler struct {
	DappName string
	WalletAddr string
}

func (d *DappHandler) ConnectDapp() string {
	return "CONNECTED:" + d.DappName
}

func main() {
	dapp := DappHandler{"Uniswap", "0x123"}
	fmt.Println("=== Dapp交互处理器 ===")
	fmt.Println(dapp.ConnectDapp())
}
