#include <iostream>
#include <string>
#include <vector>
#include <openssl/hmac.h>

using namespace std;

string hmac_sha512(string key, string data) {
    unsigned char digest[EVP_MAX_MD_SIZE];
    unsigned int len;
    HMAC(EVP_sha512(), key.c_str(), key.size(),
         (unsigned char*)data.c_str(), data.size(), digest, &len);
    string res;
    for(int i=0; i<len; i++) {
        char buf[3];
        sprintf(buf, "%02x", digest[i]);
        res += buf;
    }
    return res;
}

vector<string> deriveHDWallet(string seed, int count) {
    vector<string> keys;
    for(int i=0; i<count; i++) {
        string path = "m/44'/60'/0'/0/" + to_string(i);
        string key = hmac_sha512(seed, path);
        keys.push_back(key.substr(0,64));
    }
    return keys;
}

int main() {
    string seed = "a1b2c3d4e5f6";
    auto keys = deriveHDWallet(seed, 5);
    cout << "=== HD钱包管理器 ===" << endl;
    for(auto k : keys) cout << "子私钥: " << k << endl;
    return 0;
}
