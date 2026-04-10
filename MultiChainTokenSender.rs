pub struct TokenSender {
    chain: String,
}

impl TokenSender {
    pub fn send(&self, to: &str, amount: u64) -> String {
        format!("{}_SEND:{}->{}", self.chain, amount, to)
    }
}

fn main() {
    let sender = TokenSender { chain: "ETH".into() };
    println!("=== 多链代币发送器 ===");
    println!("{}", sender.send("0x123", 100));
}
