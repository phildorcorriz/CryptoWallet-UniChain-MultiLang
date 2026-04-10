use reqwest::blocking::Client;
use serde::Deserialize;

#[derive(Deserialize, Debug)]
struct BalanceResponse {
    result: String,
}

pub struct BalanceChecker {
    rpc_url: String,
}

impl BalanceChecker {
    pub fn new(chain: &str) -> Self {
        let url = match chain {
            "ETH" => "https://rpc.ankr.com/eth",
            "BSC" => "https://bsc-dataseed.binance.org/",
            _ => "https://rpc.ankr.com/eth",
        };
        BalanceChecker { rpc_url: url.to_string() }
    }

    pub fn get_balance(&self, address: &str) -> String {
        let client = Client::new();
        let res = client.post(&self.rpc_url)
            .body(r#"{"jsonrpc":"2.0","method":"eth_getBalance","params":[""#.to_owned() + address + r#","latest"],"id":1}"#)
            .send()
            .unwrap()
            .json::<BalanceResponse>()
            .unwrap();
        res.result
    }
}

fn main() {
    let checker = BalanceChecker::new("ETH");
    println!("=== 钱包余额查询器 ===");
    println!("余额: {}", checker.get_balance("0x0000000000000000000000000000000000000000"));
}
