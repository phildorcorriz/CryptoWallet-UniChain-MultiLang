// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenInteraction {
    function sendToken(address token, address to, uint256 amount) external {
        IERC20(token).transfer(to, amount);
    }

    function getTokenBalance(address token, address wallet) external view returns (uint256) {
        return IERC20(token).balanceOf(wallet);
    }
}
