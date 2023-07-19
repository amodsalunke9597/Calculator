const numbers = [1,2,3,4,5];
const multiply = numbers.map((num) => {
    let m = num * num + 1
    if(m == 10){
        console.log('got the sum of '+m)
    }
    return m;
})

console.log(multiply);

const filtern = [1,2,3,4,5];
const filterNum = filtern.filter((num) => {
    const number =  num * num === 4
    return number;
})

console.log(filterNum);


const fil = [2,3,4,5,6];
const number = fil.reduce((acc, num) => {
    const identify = acc + num
    if(identify === 9){
        console.log('reduce function fulfilled');
    }
    return identify;
})

console.log(number);