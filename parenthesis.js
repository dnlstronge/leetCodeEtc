/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


Constraints
0 <= input.length <= 100*/


// check one: odd vs even? 

function validParentheses(parens) {
  
let a = parens.split("", ).filter((char) => char === "(").length
let b = parens.split("", ).filter((char) => char === ")").length
console.log(a, b)
}
validParentheses("(())")

// maybe stack sort?

function validParentheses(parens) {
let a = []


for (let i= 0; i < parens.length; i++)
 if (parens[i] === "(") {
   a.push("(") 
 }
console.log(a)

}
validParentheses("(())")

