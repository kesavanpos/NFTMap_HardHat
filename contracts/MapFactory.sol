// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract MapFactorys{

/*
  *   A new map is born
  */
  event MapCreated(uint256 mapId);

  /*
  *   A map has been transfer
  */
  event Transfer(address from, address to, uint256 tokenId);

  /*  
  *   As it fit exactly into two bit words
  */
  struct Map {      
      uint64 creationTime;
      string mapIds;
  }

  Map[] maps;

  mapping (uint256 => address) public mapIndexToOwner;
  mapping (address => uint256) ownershipTokenCount;

  // Add a list of approved maps, that are allowed to be transfered
  mapping (uint256 => address) public mapIndexToApproved;

  function _createMap(string memory _mapIds,address _owner)
      internal
      returns (uint)
  {

    Map memory _map = Map({
        mapIds : _mapIds,
        creationTime: uint64(block.timestamp)        
    });

    maps.push(_map);
    uint256 mapsLength = maps.length;

    uint256 newMapId = mapsLength - 1;
    
    require(newMapId == uint256(uint32(newMapId)));

    // emit the birth event
    emit MapCreated(
        newMapId        
    );

    // This will assign ownership, and also emit the Transfer event as
    // per ERC721 draft
    _transfer(address(0), _owner, newMapId);
    return newMapId;
  }

function _transfer(address _from, address _to, uint256 _tokenId) internal {

    // Since the number of kittens is capped to 2^32 we can't overflow this
    ownershipTokenCount[_to]++;
    // transfer ownership
    mapIndexToOwner[_tokenId] = _to;

    if (_from != address(0)) {
        ownershipTokenCount[_from]--;

        delete mapIndexToApproved[_tokenId];
    }

    // Emit the transfer event.
    emit Transfer(_from, _to, _tokenId);
  }
}