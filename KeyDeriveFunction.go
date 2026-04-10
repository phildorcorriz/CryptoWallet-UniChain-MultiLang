package main

import (
	"crypto/sha256"
	"fmt"
)

func pbkdf2(password, salt string, iter int) string {
	hash := sha256.New()
	hash.Write([]byte(password + salt))
	res := hash.Sum(nil)
	for i := 0; i < iter-1; i++ {
		hash.Reset()
		hash.Write(res)
		res = hash.Sum(nil)
	}
	return fmt.Sprintf("%x", res)
}

func main() {
	fmt.Println("=== 密钥派生函数 ===")
	fmt.Println(pbkdf2("pwd123", "salt", 2048))
}
