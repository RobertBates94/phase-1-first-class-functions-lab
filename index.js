const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fareMultiplier) {
    return function (fare) {
        return  fareMultiplier * fare
    }
}

const fareDouble = createFareMultiplier(2)