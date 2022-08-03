const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//a
const novoPokemon = {
    ...pokemon1,
    nome:"Squirtle",
    tipo:'agua',
    nivel: 5
};
//b
pokemon1.ataques = [];
pokemon1.ataques.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100,
});
//c
novoPokemon.ataques = [
    ...pokemon1.ataques
];
//letra D
pokemon1.ataques = {nome: "Folha Navalha",
dano: 45,
precisao: 100,
tipo: "Grama"
};
console.log(pokemon1)

//letra E
novoPokemon.ataque = {nome: "Jato de Água",
dano: 40,
precisao: 100,
tipo: "Água"
};

//f
console.log(novoPokemon)


