function Cook(input) {
    let number = Number(input.shift());
    let task = input.shift();
    for (let i = 0; i < 5; i++) {
        switch (task) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.80;
                break;
            default:
                break;
        }

        console.log(number);
        task = input.shift();
    }
}

Cook([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
Cook([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
