#include <iostream>
#include <string>
#include <random>
#include <algorithm>

using namespace std;

string generateSecureKey(int length = 64) {
    const char chars[] = "0123456789abcdefABCDEF";
    string res;
    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<> dist(0, 15);
    
    for(int i=0; i<length; i++) {
        res += chars[dist(gen)];
    }
    return res;
}

int main() {
    cout << "=== 安全密钥生成器 ===" << endl;
    cout << generateSecureKey() << endl;
    return 0;
}
