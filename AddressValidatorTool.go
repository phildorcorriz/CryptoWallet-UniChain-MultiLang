package main

import (
	"regexp"
	"fmt"
)

func isValidEthAddress(addr string) bool {
	re := regexp.MustCompile("^0x[0-9a-fA-F]{40}$")
	return re.MatchString(addr)
}

func main() {
	fmt.Println("=== 地址验证工具 ===")
	fmt.Println(isValidEthAddress("0x1234567890123456789012345678901234567890"))
}
