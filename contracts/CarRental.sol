// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract carRent {
    struct Rental {
        string first_name;
        string last_name;
        uint age;
        string pickup_location;
        string drop_location;
        string car_type;
        uint pickup_date;
        uint drop_date;
        uint mobile_number;
    }

    address public owner;
    mapping(address => Rental) public rentalData;

    constructor() {
        owner = msg.sender;
    }

    
    function registerCarRental(
        address _id,
        string memory _first_name,
        string memory _last_name,
        uint _age,
        string memory _pickup_location,
        string memory _drop_location,
        string memory _car_type,
        uint _pickup_date,
        uint _drop_date,
        uint _mobile_number
    ) public {
        rentalData[_id] = Rental(_first_name, _last_name, _age, _pickup_location, _drop_location, _car_type, _pickup_date, _drop_date, _mobile_number);}
}