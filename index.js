function distanceFromHqInBlocks(someValue){
    let distance;
        if (someValue >= 42) {
           distance = (someValue - 42);
        } else if (someValue < 42) {
           distance = (42 - someValue);
        }

    return distance;
}

function distanceFromHqInFeet(someValue) {
    let distance = distanceFromHqInBlocks(someValue);
    let distanceft;

        if (someValue === 42) {
           distanceft = 0;
        } else if (someValue > 42) {
           distanceft = distance * 264;
        } else if (someValue < 42) {
           distanceft = distance * 264;
        }

    return distanceft;
}

function  distanceTravelledInFeet(start, destination){
    let distanceTravFt;
        if (destination >= start) {
            distanceTravFt = (destination - start) * 264;
        } else if (destination < start) {
            distanceTravFt = (start - destination) * 264;
        }
    
    return distanceTravFt;
}

function calculatesFarePrice(start, destination) {
    let distanceTravFt = distanceTravelledInFeet(start, destination);
    let fare;
        if (distanceTravFt <= 400) {
           fare = 0;
        } 
        else if (distanceTravFt > 400 && distanceTravFt <= 2000) {
            fare = (distanceTravFt- 400) * 0.02;
        }
        else if (distanceTravFt > 2000 && distanceTravFt <= 2500) {
            fare = 25;
        }
        else if (distanceTravFt > 2500) {
            fare = 'cannot travel that far';
        }

    return fare;
}