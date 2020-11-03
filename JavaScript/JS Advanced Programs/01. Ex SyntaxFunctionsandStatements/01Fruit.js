function solve(name, weight, pricePerKG){
weight = Number(weight) / 1000.0;
let price = weight * Number(pricePerKG);

console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`)
}

solve('orange', 2500, 1.80);