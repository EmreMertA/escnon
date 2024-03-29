// SPDX-License-Identifier: UNLISANCED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 trasactionCount;

    event Transfer(
        address from,
        address to,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] public transactions;

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        trasactionCount += 1;
        transactions.push(
            TransferStruct({
                sender: msg.sender,
                receiver: receiver,
                amount: amount,
                message: message,
                timestamp: block.timestamp,
                keyword: keyword
            })
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionsCount() public view returns (uint256) {
        return trasactionCount;
    }
}
