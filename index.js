// Code your solution in this file!

// Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing both driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that creates a fare multiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Function that doubles fares using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Function that triples fares using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Higher-order function that takes an array and a function, applies the function to the array
const selectDifferentDrivers = function(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
};
