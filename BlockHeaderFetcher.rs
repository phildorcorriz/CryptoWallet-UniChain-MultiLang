use reqwest::blocking::get;

pub fn fetch_latest_block(rpc: &str) -> String {
    let resp = get(rpc).unwrap().text().unwrap();
    format!("BLOCK_HEADER:{}", resp.chars().take(32).collect::<String>())
}

fn main() {
    let header = fetch_latest_block("https://rpc.ankr.com/eth");
    println!("=== 区块头获取器 ===");
    println!("{}", header);
}
