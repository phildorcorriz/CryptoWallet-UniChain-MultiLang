// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract StakingClient {
    address public stakingContract;

    constructor(address _staking) {
        stakingContract = _staking;
    }

    function stake() external payable {
        (bool success,) = stakingContract.call{value: msg.value}("");
        require(success, "Stake failed");
    }

    function unstake(uint256 amount) external {
        (bool success,) = stakingContract.call(abi.encodeWithSignature("unstake(uint256)", amount));
        require(success, "Unstake failed");
    }
}
