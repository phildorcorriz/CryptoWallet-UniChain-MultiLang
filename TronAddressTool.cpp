#include <iostream>
#include <string>
#include <openssl/sha.h>
#include <openssl/ripemd.h>
#include <vector>

using namespace std;

string sha256(const string& str) {
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256_CTX sha256;
    SHA256_Init(&sha256);
    SHA256_Update(&sha256, str.c_str(), str.size());
    SHA256_Final(hash, &sha256);
    char res[65];
    for(int i = 0; i < SHA256_DIGEST_LENGTH; i++)
        sprintf(res + (i * 2), "%02x", hash[i]);
    return string(res);
}

string ripemd160(const string& str) {
    unsigned char hash[RIPEMD160_DIGEST_LENGTH];
    RIPEMD160_CTX ripemd;
    RIPEMD160_Init(&ripemd);
    RIPEMD160_Update(&ripemd, str.c_str(), str.size());
    RIPEMD160_Final(hash, &ripemd);
    char res[41];
    for(int i = 0; i < RIPEMD160_DIGEST_LENGTH; i++)
        sprintf(res + (i * 2), "%02x", hash[i]);
    return string(res);
}

string generateTronAddress() {
    string randPub = "04" + to_string(rand()) + to_string(rand());
    string s = sha256(randPub);
    string r = ripemd160(s);
    return "T" + r.substr(0, 33);
}

int main() {
    cout << "=== TRON地址生成工具 ===" << endl;
    cout << "生成的TRON地址: " << generateTronAddress() << endl;
    return 0;
}
