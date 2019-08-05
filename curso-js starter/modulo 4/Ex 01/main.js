//axios.get('https://api.github.com/users/philmeneghini')

function checaIdade(idade) {
 return new Promise(function(resolve, reject){
 setTimeout(function(){
	return idade >= 18 ? resolve() : reject (); 	
  } , 2000);
 });
}

checaIdade(18)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });
 ;



/*

var minhaPromise = function(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/philmeneghini');
		xhr.send(null);

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				if (xhr.status === 200){
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('Erro na requisição');
				}
			}
		}
	});
}


var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/philmeneghini');
xhr.send(null);

xhr.onreadystatechange = function(){
	if (xhr.readyState === 4){
		console.log(JSON.parse(xhr.responseText));
	}
}


*/