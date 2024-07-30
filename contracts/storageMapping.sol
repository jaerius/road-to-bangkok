// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageMapping {
    uint256 public storedData;

    mapping(uint256 => uint256) public dataMap;

    function setStoredData(uint256 _data) public {
        storedData = _data;
    }

    function setDataMap(uint256 _key, uint256 _value) public{
        dataMap[_key] = _value;
    }

    function getStoredData() public view returns(uint256){
        return storedData;
    }

    function getDataMap(uint256 _key) public view returns (uint256) {
        return dataMap[_key];
    }
}