// function fizzBuzz(num){
//     for(let i = 0; i <= num; i++){
//         if( i % 3 === 0 && i % 5 === 0){
//             console.log("fizzBuzz")
//         }else if(i % 3 === 0){
//             console.log("fizz")
//         }else if(i % 5 === 0){
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(15)

function moneyDolley(num){
    for(let i = 0; i < num; i++){
        if(i % 7 === 0){
            console.log("Money")
        }
        else if(i % 5 === 0){
            console.log("Dolly")
        }else{
            console.log(i)
        }
    }
}
moneyDolley(10)