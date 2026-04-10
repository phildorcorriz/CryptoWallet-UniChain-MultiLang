pub struct SyncMonitor {
    chain: String,
    current_block: u64,
}

impl SyncMonitor {
    pub fn new(chain: &str) -> Self {
        SyncMonitor { chain: chain.to_string(), current_block: 18000000 }
    }

    pub fn sync_status(&self) -> &str {
        "SYNCED"
    }
}

fn main() {
    let mon = SyncMonitor::new("ETH");
    println!("=== 链同步监控器 ===");
    println!("状态: {}", mon.sync_status());
}
