// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract NotificationService {
    event WalletEvent(address indexed wallet, string message, uint256 time);

    function sendNotification(address wallet, string calldata msg_) external {
        emit WalletEvent(wallet, msg_, block.timestamp);
    }
}
