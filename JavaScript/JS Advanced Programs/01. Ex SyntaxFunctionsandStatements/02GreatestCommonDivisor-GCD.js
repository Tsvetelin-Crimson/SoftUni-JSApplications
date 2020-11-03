function GetGreatestCommonDiviser(first, second){
    first = Number(first);
    second = Number(second);
    if (first % 10 === 0 && second % 10 === 0) {
        console.log(10);
    } else if(first % 7 === 0 && second % 7 === 0) {
        console.log(7);
    } else if(first % 5 === 0 && second % 5 === 0) {
        console.log(5);
    } else if(first % 3 === 0 && second % 3 === 0) {
        console.log(3);
    } else if(first % 2 === 0 && second % 2 === 0) {
        console.log(2);
    } else {
        console.log(1);
    }
    }

    GetGreatestCommonDiviser(2154, 458);
    