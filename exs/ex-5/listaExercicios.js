//Declaracao de funcao
function greeting(name){
    return `Hello, ${name}, How are you?`
}
//expressao de funcao
console.log(greeting('Vinícius'));
console.log(greeting('Jessica'));

const greeting2 = function(name){
    return `Hello, ${name}, How are you?`
}

console.log(greeting2('Vinícius'));
console.log(greeting2('Jessica'));

//arrow function

const greeting3 = (name) => `Hello, ${name}, How are you?`

console.log(greeting3('Vinícius'));
console.log(greeting3('Jessica'));

//declaracao de funcao
function isAdult(age) {
    if(age >= 18){
        return true 
    } else {
        return false
    }
}

console.log(isAdult(25))
console.log(isAdult(18))
console.log(isAdult(15))


//expressao de funcao

const isAdult2 = function(age){
    if(age >= 18){
        return true 
    } else {
        return false
    }
}

console.log(isAdult2(25))
console.log(isAdult2(18))
console.log(isAdult2(15))


//arrow function com operador ternario

const isAdult3 = (age) => age >= 18 ? true : false

console.log(isAdult3(25))
console.log(isAdult3(18))
console.log(isAdult3(15))


// declaracao de funcao
console.log("PALINDROME")
function isPalindrome(palindrome){
    if(palindrome == palindrome.split('').reverse().join('')){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('renner'))
console.log(isPalindrome('oii'))
console.log(isPalindrome('ola'))

// expressao de funcao
const isPalindrome2 = function (palindrome){
    if(palindrome == palindrome.split('').reverse().join('')){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome2('renner'))
console.log(isPalindrome2('oii'))
console.log(isPalindrome2('ola'))

//arrow function 

const isPalindrome3 = (palindrome) => palindrome == palindrome.split('').reverse().join('') ? true : false

console.log(isPalindrome3('renner'))
console.log(isPalindrome3('oii'))
console.log(isPalindrome3('ola'))

//declaracao de funcao
function whichIsTheBiggest(a,b,c){
    if(a > b && a > c) {
        return a
    } else if( b > a && b > c){
        return b
    } else {
        return c
    }
}

console.log(whichIsTheBiggest(1, 2, 3))
console.log(whichIsTheBiggest(2, 3, 1))
console.log(whichIsTheBiggest(3, 2, 1))

//expressao de funcao
const whichIsTheBiggest2 = function (a, b, c) {
    if(a > b && a > c) {
        return a
    } else if( b > a && b > c){
        return b
    } else {
        return c
    }
}

console.log(whichIsTheBiggest2(1, 2, 3))
console.log(whichIsTheBiggest2(2, 3, 1))
console.log(whichIsTheBiggest2(3, 2, 1))

//arrow function
const whichIsTheBiggest3 = (a, b, c) => {
    if(a > b && a > c) {
        return a
    } else if( b > a && b > c){
        return b
    } else {
        return c
    }
}

console.log(whichIsTheBiggest3(1, 2, 3))
console.log(whichIsTheBiggest3(2, 3, 1))
console.log(whichIsTheBiggest3(3, 2, 1))

// arrow function
const calculaPotencia = (base, expoente) => {
    return base**expoente
}

console.log(calculaPotencia(2, 3))
console.log(calculaPotencia(10, 5))
console.log(calculaPotencia(6, 10))