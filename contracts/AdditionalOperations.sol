// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdditionalOperations{
    function modExample(uint256 a, uint256 b) public pure returns(uint256) {
        require(b != 0, "divider cannot be zero");
        return a%b;
    }

    function ltExample(uint256 a, uint256 b) public pure returns (bool) {
        return a < b;
    }

    function byteExample(bytes1[] memory data, uint256 index) public pure returns(bytes1){
        require(index < data.length, "Index out of bounds");
        return data[index];
    }
}