function Print(array) {
    let n = Number(array.pop());
    array.forEach((value, i) => {
        if(i % n == 0){
            console.log(value);
        }
    })
}


Print(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)