"use strict"  //treat all js code as newer version
// alert("hello world")  //we can use alert in the browser only

// console.log("hello world")  //print the output in the console
// console.log(3 + 4) // we are using the node js to run this code not the browser
// # Data Types in JS
// 1. Primitive Data Types
//     a. Number
//     b. String
//     c. Boolean
//     d. null
//     e. undefined
//     f. Symbol (new in ES6)
// 2. Reference Data Types
//     a. Array
//     b. Object Literals
//     c. Functions
//     d. Dates

console.log(3 + 4)
console.log("hello world")// we are using the node js to run this code not the browser

let name = "mohd arslan" //string
let age = 21 //number
let isApproved = true //boolean
let firstName = undefined
let selectedColor = null

// if number is bigger than 2^53
// then we have to use bigint
let bigNumber = 9007199254741991n //bigint

//null is an object, null ek type hai jo khali hai
console.log(typeof null) //object

//undefined means value is not assigned
// symbol is used to create unique identifiers, uniqueness ke liye ham symbols use krte hai

// objects

console.log(typeof name) //string

