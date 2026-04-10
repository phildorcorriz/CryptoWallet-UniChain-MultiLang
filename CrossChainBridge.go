package main

import "fmt"

type ChainBridge struct {
	SourceChain string
	TargetChain string
	Fee         float64
}

func NewBridge(source, target string) *ChainBridge {
	return &ChainBridge{
		SourceChain: source,
		TargetChain: target,
		Fee:         0.005,
	}
}

func (c *ChainBridge) Transfer(amount float64, fromAddr, toAddr string) map[string]interface{} {
	return map[string]interface{}{
		"from_chain":  c.SourceChain,
		"to_chain":    c.TargetChain,
		"amount":      amount,
		"from_address": fromAddr,
		"to_address":   toAddr,
		"fee":         amount * c.Fee,
		"status":      "pending",
	}
}

func main() {
	bridge := NewBridge("ETH", "BSC")
	tx := bridge.Transfer(1.5, "0x111", "0x222")
	fmt.Println("=== 跨链桥模块 ===")
	fmt.Println(tx)
}
