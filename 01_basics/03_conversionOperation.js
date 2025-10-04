let score = "22" //string
let score1 = 22 //number
let score2 = "22abc" //string
console.log(typeof score) //string
console.log(typeof score1) //number
console.log(typeof score2) //string

let newNumber = Number(score) //string to number
console.log(typeof newNumber) //number
console.log(newNumber) //22

let newNumber1 = Number(score2) //string to number
console.log(typeof newNumber1) //number
console.log(newNumber1) //NaN (not a number)

// we need to be carful while conveting a string to a number
// "22" => 22
// "22abc" => NaN
// "abc22" => NaN
// "abc" => NaN
// "" => 0
// " " => 0
// null => 0
// undefined => NaN