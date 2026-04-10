use std::fs::write;

pub struct BackupManager {
    pub wallet_name: String,
}

impl BackupManager {
    pub fn new(name: &str) -> Self {
        BackupManager { wallet_name: name.to_string() }
    }

    pub fn backup_wallet(&self, data: &str) -> std::io::Result<()> {
        let filename = format!("backup_{}.dat", self.wallet_name);
        write(&filename, data)?;
        Ok(())
    }
}

fn main() {
    let bm = BackupManager::new("mywallet");
    let _ = bm.backup_wallet("priv:abc123,mnemonic:test");
    println!("=== 钱包备份管理器 ===");
    println!("备份完成");
}
