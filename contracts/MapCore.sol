import "./utils/Ownable.sol";
import "./MapMarketPlace.sol";

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract MapCore is Ownable, MapMarketPlace {
uint256 value = 0;

constructor() {

    // We are creating the first map at index 0 
    _createMap('',address(0));
  }

  function createMap(string memory _map) public onlyOwner {

    // Gen0 have no owners they are own by the contract
    uint256 tokenId = _createMap(_map,msg.sender);
    setOffer(0.2 ether, tokenId);
  }

function getMap(uint256 _id)
    public
    view
    returns (
    string memory mapId
  ) {
    Map storage _objMap = maps[_id];

    require(_objMap.creationTime > 0, "the map doesn't exist");

    mapId = string(_objMap.mapIds);    
  }
}