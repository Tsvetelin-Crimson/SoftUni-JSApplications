function solve(carDescription){
    let { wheelsize, power, model, carriage, color } = carDescription;
    wheelsize = wheelsize % 2 == 0 ? wheelsize - 1 : wheelsize
    //let wheels2 = [0, 0, 0, 0].fill(wheelsize, 0, 4)
    let wheels = [0, 0, 0, 0].fill(wheelsize, 0, 4);  
    //wheels = [wheelsize, wheelsize, wheelsize, wheelsize]

    let engine = {};
    if (power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if(power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
       
    }
    let car = {
        model: model,
        engine,
        carriage: {
            type: carriage,
            color: color
        },
        wheels,
    }
    return car;
}


console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));