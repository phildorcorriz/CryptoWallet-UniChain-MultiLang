// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract WalletEncryption {
    mapping(address => string) private encryptedKeys;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function storeEncryptedKey(address walletAddr, string calldata encryptedData) external onlyOwner {
        encryptedKeys[walletAddr] = encryptedData;
    }

    function getEncryptedKey(address walletAddr) external view returns (string memory) {
        return encryptedKeys[walletAddr];
    }

    function deleteKey(address walletAddr) external onlyOwner {
        delete encryptedKeys[walletAddr];
    }

    function verifyWallet(address walletAddr) external pure returns (bool) {
        return walletAddr != address(0);
    }
}
