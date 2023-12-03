pragma solidity >=0.7.0 <0.9.0;
// SPDX-License-Identifier: GPL-3.0

contract Roxwealth {
   address public manager;
    function donate() public payable {
        payable(manager).transfer(msg.value);

    }


}