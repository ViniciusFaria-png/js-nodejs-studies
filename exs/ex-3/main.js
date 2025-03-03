// Tipos primitivos

//Template String
const senha = "senha123"

console.log(`Minha senha é ${senha}`)

//Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

let oque

console.log("Isso aqui é: ", typeof oque)

let senhaNova = "12345"

let novaSenha = parseInt(senhaNova)

console.log(novaSenha, typeof novaSenha)

//Number converte o valor para um tipo number, se nao for possivel retorna NaN
Number("1")

//Number.parseInt() e Number.parseFloat()
//Convertem para um numero inteiro e para um numero de ponto flutuante, respectivamente

parseInt('1')
parseInt('15')
parseInt('1151')
parseInt('0')

parseFloat('1')
parseFloat('15')
parseFloat('1151')
parseFloat('0')

//Há como forcar a coercao de tipos através do operador '+'

+'45'
+true

console.log(typeof +'45')
console.log(typeof +true)

//parseInt e parseFloat convertem apenas strings, enquanto o Number() é capaz de converter outros tipos de dados.

//Converter para string, semelhante ao funcionamento do Number()
String(2)
String(undefined)
String(true)

//Verifica a incidencia de um conjunto de caracteres dentro de uma string
includes()

'estudando JavaScript'.includes('Java');

// toLowerCase() e toUpperCase() autoexplicativos 




