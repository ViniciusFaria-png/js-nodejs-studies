//Funções
//Primeira forma - Declaracao de funcao
function showName(name){
    console.log(name);
}


showName('Vinícius')
showName('Jessica')


function showInfo(name, score){
    console.log(`The name is ${name} and score is ${score}`);
}


showInfo('Vinícius', 5)
showInfo('Jessica', 10)


function scoreMultiplier(score){
    let multiplier = 10
    return score*multiplier
}

let result = scoreMultiplier(20)
console.log(result)

//hoisting
// a função é lida antes de qualquer coisa
function studentFailed1(finalGrade, absences){
    if (finalGrade < 7 && absences > 4 ){
        return true 
    } else {
        return false
    }
}

console.log(studentFailed1(6, 5));
console.log(studentFailed1(10, 2));

//Segunda forma - Expressao de funcao
//A função só sera lida quand
const studentFailed2 = function(finalGrade, absences){
    if (finalGrade < 7 && absences > 4 ){
        return true 
    } else {
        return false
    }
}

console.log(studentFailed2(6, 5));
console.log(studentFailed2(10, 2));

//Arrow function
// tambem é uma expressao de funcao

const studentFailed3 = (finalGrade, absences) => {
    if (finalGrade < 7 && absences > 4 ){
        return true 
    } else {
        return false
    }
}

console.log(studentFailed3(6, 5));
console.log(studentFailed3(10, 2));

//Arrow function de uma linha apenas
const showName1 = (nome) => nome;

console.log(showName1('Vinícius'))