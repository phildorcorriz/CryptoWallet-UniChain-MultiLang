use ed25519_dalek::{Keypair, Signer, Verifier};
use rand::rngs::OsRng;
use bs58;

pub struct SolanaWallet {
    pub keypair: Keypair,
    pub public_key: String,
    pub private_key: String,
}

impl SolanaWallet {
    pub fn new() -> Self {
        let mut csprng = OsRng {};
        let keypair = Keypair::generate(&mut csprng);
        
        let public_key = bs58::encode(keypair.public.to_bytes()).into_string();
        let private_key = bs58::encode(keypair.to_bytes()).into_string();
        
        Solana {
            keypair,
            public_key,
            private_key,
        }
    }

    pub fn sign_message(&self, message: &str) -> String {
        let signature = self.keypair.sign(message.as_bytes());
        bs58::encode(signature.to_bytes()).into_string()
    }

    pub fn verify_message(&self, message: &str, signature_str: &str) -> bool {
        let signature_bytes = bs58::decode(signature_str).into_vec().unwrap();
        let signature = ed25519_dalek::Signature::from_bytes(&signature_bytes).unwrap();
        self.keypair.public.verify(message.as_bytes(), &signature).is_ok()
    }
}

fn main() {
    let wallet = SolanaWallet::new();
    println!("=== Solana钱包处理器 ===");
    println!("公钥: {}", wallet.public_key);
    println!("私钥: {}", wallet.private_key);
}
