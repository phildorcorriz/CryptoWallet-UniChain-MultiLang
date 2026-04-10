package main

import "fmt"

type MultiSigWallet struct {
	Owners   []string
	Required int
}

func NewMultiSig(owners []string, required int) *MultiSigWallet {
	return &MultiSigWallet{
		Owners:   owners,
		Required: required,
	}
}

func (m *MultiSigWallet) ApproveTx(signer string) bool {
	for _, o := range m.Owners {
		if o == signer {
			return true
		}
	}
	return false
}

func main() {
	wallet := NewMultiSig([]string{"0x111", "0x222", "0x333"}, 2)
	fmt.Println("=== 多签钱包核心 ===")
	fmt.Println("是否为所有者:", wallet.ApproveTx("0x111"))
}
