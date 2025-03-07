const elencoPalmeiras = [
"Weverton",
"Marcelo Lomba",
"Mateus",

"Marcos Rocha",
"Mayke",
"Gustavo Gómez",
"Murilo",
"Naves",
"Michel",
"Vitor Reis",
"Agustín Giay",
"Joaquín Piquerez",
"Caio Paulista",
"Vanderlan",

"Aníbal Moreno",
"Richard Ríos",
"Zé Rafael",
"Gabriel Menino",
"Fabinho",
"Raphael Veiga",
"Maurício",
"Rômulo",

"Felipe Anderson",
"Estêvão",
"Lázaro",
"Bruno Rodrigues",
"Rony",
"José Manuel López",
"Luighi"
];

console.log('Goleiros: ' + elencoPalmeiras.slice(0, 3));
console.log('Defensores: ' + elencoPalmeiras.slice(3, 14));
console.log('Meio Campistas: ' + elencoPalmeiras.slice(14, 22));
console.log('Atacantes: ' + elencoPalmeiras.slice(22, 29));

elencoPalmeiras.splice(16, 3, 'Lucas Evangelista', 'Emiliano Martinez')
elencoPalmeiras.splice(24, 3, 'Paulinho', 'Vitor Roque')

console.log('Atacantes: ' + elencoPalmeiras.slice(22, 29));
console.log('Meio Campistas: ' + elencoPalmeiras.slice(14, 22));


const atacantes = [
"Felipe Anderson",
"Estêvão",
"Bruno Rodrigues",
"José Manuel López",
"Luighi"
];

const novosAtacantes = [
    "Paulinho",
    "Vitor Roque",
]

const ataqueAtual = atacantes.concat(novosAtacantes)

console.log(ataqueAtual)


const gols = [ 
    10, 25
]

const atacantesGol = [novosAtacantes, gols]


console.log(`O jogador ${atacantesGol[0][0]} fez ${atacantesGol[1][0]} gols`)
console.log(`O jogador ${atacantesGol[0][1]} fez ${atacantesGol[1][1]} gols`)

let frase1 = 'oi'
let frase2 = ' meu nome é vinicius'



console.log(frase1.concat(frase2))


