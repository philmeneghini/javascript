const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// 2.1 - map

const ages = usuarios.map(function(usuario){
	return usuario.idade;
});

console.log(ages);

// 2.2 - filter

const filter = usuarios.filter(function(usuario){
	return usuario.idade >= 18 && usuario.empresa === 'Rocketseat';
});

console.log(filter);

// 2.3 - find

const find = usuarios.find(function(usuario){
	return usuario.empresa === 'Google';
});

console.log(find);

// 2.4 - unindo operações

const newAgeFilter = usuarios.map(function(usuario){
    return { ...usuario, idade: usuario.idade * 2 };
}).filter(function(usuario){
    return usuario.idade <= 50;
});

console.log(newAgeFilter);


