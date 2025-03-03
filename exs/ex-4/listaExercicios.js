//exercicios sobre operadores

let saldo = 1000
let deposito = 500
let saque = 600

let operacao = (saldo + deposito) - saque

console.log(operacao)


let idade = 20

let isPar = idade%2 == 0 ? true : false
console.log(isPar)

let isLogged = true
let isAdmin = true

if(isLogged === true && isAdmin === true){
    console.log('Usuário verificado')
} else {
    console.log('Usuário não tem permissão')
}

console.log(isLogged === true && isAdmin === true ? 'Usuário verificado' : 'Usuário não tem permissão')

let uma = false
let duas = false

if(uma === true || duas === true){
    console.log("Verdadeiro")
} else {
    console.log('falso')
}

console.log(uma === true || duas === true ? "Pelo menos um é verdadeiro" : "Nenhum é verdadeiro")

let age = 16
let idadeMinima = 18

if(age >= 18){
    console.log('Usuário pode comprar o ingresso')
} else {
    console.log('Usuário não pode comprar o ingresso')
}

console.log(age >= 18 ? 'Usuário pode comprar o ingresso' : 'Usuário não pode comprar o ingresso')