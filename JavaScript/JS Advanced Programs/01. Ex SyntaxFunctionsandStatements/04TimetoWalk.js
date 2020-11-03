function GetTimeToWalk(steps, footprintInMeters, speedKMAnHour) {
    let distanceInMeters = steps * footprintInMeters;
    let breaks = Math.floor(distanceInMeters / 500);
    let timeInSeconds = distanceInMeters / (speedKMAnHour / 3.6) + breaks * 60;

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.ceil(timeInSeconds % 60);

    console.log(`${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`);
}

GetTimeToWalk(4000, 0.60, 5)
GetTimeToWalk(2564, 0.70, 5.5)
