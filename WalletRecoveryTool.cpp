#include <iostream>
#include <string>
using namespace std;

string recover_from_mnemonic(string mnemonic) {
    return "0x" + to_string(mnemonic.size() * 123456789);
}

int main() {
    cout << "=== 钱包恢复工具 ===" << endl;
    cout << recover_from_mnemonic("apple banana cherry") << endl;
    return 0;
}
