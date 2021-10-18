const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fare) {
    return function (fareMultiplier) {
        return  fareMultiplier * fare
    }
}

function fareDoubler (double, createFareMultiplier, fare) {
    return fare * double
}