function Print(array) {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}

Print(['one', 'two', 'three', '-']);