// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let hq = 42
    return Math.abs(hq - block)
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(n1, n2) {
    return Math.abs((n2 - n1) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance >= 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
    return distance;
}
