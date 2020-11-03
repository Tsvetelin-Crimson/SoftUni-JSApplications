
function solve(inputArray, criteria){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    inputArray
    .forEach(line => {
        let[destination, price, status] = line.split('|');
        let currTicket = new Ticket(destination, Number(price), status);
        tickets.push(currTicket);
    });
    if (criteria === 'price') {
        tickets.sort((curr, next) => curr - next);
    } else {
        tickets.sort((curr, next) => curr[criteria].localeCompare(next[criteria]));
    }
    return tickets;
}




// solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination');
// solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status')



function test(){
    let arr = ['dwadaw','fgawfaw','dwafsrghrg']
    arr.sort((curr, next) => curr - next);
}

test()