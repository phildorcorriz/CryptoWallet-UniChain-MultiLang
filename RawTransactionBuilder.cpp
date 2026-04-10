#include <iostream>
#include <string>
using namespace std;

string build_raw_tx(string from, string to, double value, int nonce) {
    return "RAW_TX::" + from + "->" + to + "::VAL=" + to_string(value) + "::NONCE=" + to_string(nonce);
}

int main() {
    cout << "=== 原始交易构建器 ===" << endl;
    cout << build_raw_tx("0x111", "0x222", 0.1, 10) << endl;
    return 0;
}
