/*
// OBJECT SHORT SYNTAX

const nome = 'Diego';
const idade = 23;

const usuario = {
	nome,
	idade,
	empresa: 'Rocketseat',
};

console.log(usuario);

#################


// TEMPLATE LITERALS

const nome = 'Diego';
const idade = 25;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

#################

// OPERADORES REST E SPREAD

// REST

function soma(a, b, ...params){
	return params;
}

console.log(soma(1, 3, 4, 5, 6, 7, 8));

const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// REST

const usuario = {
	nome: 'Diego',
	idade: 23,
	empresa: 'Rocketseat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log (arr3);

const usuario1 = {
	nome:'Diego',
	idade: 23,
	empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);

################

// DESESTRUTURAÇÃO

const usuario = {
	nome: 'Diego',
	idade: 23,
	endereço: {
		cidade:'Sabara',
		estado: 'MG',
	},
};

console.log(usuario);

function mostraNome({nome, idade}){
	console.log(nome, idade);
}

mostraNome(usuario);

##################

// VALORES PADRAO

const  soma (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

############

// ARROW FUNCTIONS

const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({nome:'Diego'});

console.log(teste());

############

//OPERACOES EM ARRAY

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item, index){
	return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
	return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
	return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
	return item === 2;
});

console.log(find);


#############

// CONST E LET

//Const
const usuario = { nome: 'Sabara'};

usuario.nome = 'Alterado';

console.log(usuario);

#########

class Matematica{
	static soma(a, b){
		return a+b;
	}
}

console.log(Matematica.soma(1, 2));

//Let


function teste(x){
	let y = 2;

	if (x>5){
		let y = 4;
		console.log(x, y);
	}
}

teste(10);

#########

// CLASSES

class List {
	constructor(){
		this.data = [];
	}

	add(data){
		this.data.push(data);
		console.log(this.data)
	}
}

class TodoList extends List{
	constructor(){
		super();

		this.usuario = 'Sabara';
	}

	mostraUsuario(){
		console.log(this.usuario);
	}
}

var MinhaLista = new TodoList();

document.querySelector('button').onclick = function (){
	MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();
*/
"use strict";
