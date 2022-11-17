// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

interface IERCTokenReceiver{
    function onERC721Received(address _from,address _to,uint256 _tokenId,bytes memory data) external view returns(bytes4);
}