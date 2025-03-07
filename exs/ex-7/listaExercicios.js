function concatena1(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1
}

// const concatena2 = function(arr1, arr2){

// }

// const concatena3 = (arr1, arr2) => {

// }


const arr1 = [1, 3, 5, 7, 8, 0]
const arr2 = [5, 76, 1, 6 ,8, 9]

console.log(concatena1(arr1, arr2))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const parteNumeros = numeros.slice(3, 8)
console.log(parteNumeros)

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 2, 'Kiwi', 'Pêssego')
console.log(frutas)


const menuPrincipal = ['Frango', 'Bife a Cavalo', 'Salada Cesar']
const menuDeSobremesas = ['Pudim', 'Bolo de chocolate']

const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)

const matriz = []
x = 1
for(let i = 0; i < 3; i++){
    matriz[i] = [];
    for(let j = 0; j < 3; j++){
        matriz[i][j] = x;
        x += 1;
    }
}

console.table(matriz)

console.log(matriz[1][2])

matriz[2][1] = 15

console.table(matriz)