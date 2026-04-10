#include <iostream>
#include <vector>
using namespace std;

struct UTXO {
    string txid;
    double amount;
    int index;
};

vector<UTXO> get_utxos(string address) {
    vector<UTXO> res;
    res.push_back({"tx123", 0.001, 0});
    res.push_back({"tx456", 0.005, 1});
    return res;
}

int main() {
    auto utxos = get_utxos("bc1abc");
    cout << "=== BTC UTXO管理器 ===" << endl;
    for(auto u : utxos) {
        cout << u.txid << " " << u.amount << endl;
    }
    return 0;
}
