// function happyBirthday(username,age){
//     console.log(`happy birthday to ${username}`);
//     console.log(`happy birthday to ${age}`);
// }
// happyBirthday("Imran",21);
// happyBirthday("spongebob",23);

function add(x,y){
    let result = x+y;
    return result;
}
let answer = add(2,3);
console.log(answer);

function sub(x,y){
    return x - y;
}
console.log(sub(2,3))

//even or odd

function isEven(number){
 return number % 2 === 0? true : false;
}
console.log(isEven(14));