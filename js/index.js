// // variable  declaration using const
// // const sNme = "John Doe";
// // console.log(sNme);

// // variable declaration.
// var x = 5;
// x = 10

// // var declaration using let
// let y =  x+15
// y = 20
// // console.log(y);



// // DIFF TYPE OF CASES.
// // in js we use camel case.
// //syntax error


// let age = 20
// if(age <21){
//     console.log(" drink  water");
// } else if (age >= 21 && age <=25 ){
//     console.log("drink some soft drink");
// } else if (age >25  && age<=35){
//     console.log("drink hard drink");
// }else{
//     console.log("drink some porridge and exercise.");
// }


let num1 = 10
let num2 = 20
let total = num1+num2
// console.log(total);

// function addtion(num1, num2) {
//     console.log(num1+num2);
// }
// addtion(500,1000)

// function multiply(num1, num2, num3) {
//     console.log(num1*num2*num3);
//     for (let index = 0; index < 10; index++) {
//         console.log("name : jose", index);
//     }
// }
// multiply(50,100,3)




function fizzbazz(){
    for (let p = 0; p <= 20; p++) {
        // if (p%3 === 0 && p%5===0) {
        //     console.log("fizz bazz",p);
        // }


        if ( p%3 === 0) {
            console.log("fizz",p, "only divisble by 3");
        }else if ( p%5 === 0 ) {
            console.log("bazz",p , "only divisble by 5");
        }
    }
}
fizzbazz()
//INITIALIZATION, CONDITION, INCREMENT