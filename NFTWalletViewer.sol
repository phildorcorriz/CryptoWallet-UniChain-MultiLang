// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC721 {
    function balanceOf(address owner) external view returns (uint256);
    function ownerOf(uint256 tokenId) external view returns (address);
}

contract NFTViewer {
    function getNFTBalance(address nftContract, address wallet) external view returns (uint256) {
        return IERC721(nftContract).balanceOf(wallet);
    }

    function checkNFTOwner(address nftContract, uint256 tokenId) external view returns (address) {
        return IERC721(nftContract).ownerOf(tokenId);
    }
}
