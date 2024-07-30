// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyERC721 is ERC721 {
    constructor(string memory name, string memory symbol, uint256 tokenId) ERC721(name, symbol){
        _mint(msg.sender, tokenId);
    }
}