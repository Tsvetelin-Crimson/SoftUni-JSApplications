function GetRuleBreakers(input) {
    let speed = Number(input[0]);
    let location = input[1];

    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let carExcessSpeed = 0;

    switch (location) {
        case 'motorway':
            carExcessSpeed = speed - motorwayLimit;
            break;
        case 'interstate':
            carExcessSpeed = speed - interstateLimit;
            break;
        case 'city':
            carExcessSpeed = speed - cityLimit;
            break;
        case 'residential':
            carExcessSpeed = speed - residentialLimit;
            break;
        default:
            break;
    }

    if(carExcessSpeed > 40){
        console.log('reckless driving');
    } else if(carExcessSpeed <= 40 && carExcessSpeed > 20){
        console.log('excessive speeding');
    } else if(carExcessSpeed <= 20 && carExcessSpeed > 0){
        console.log('speeding');
    }
}

GetRuleBreakers([40, 'city']);
GetRuleBreakers([21, 'residential']);
GetRuleBreakers([120, 'interstate']);
GetRuleBreakers([200, 'motorway']);