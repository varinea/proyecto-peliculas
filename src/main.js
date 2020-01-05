'use strict'


// Star Wars, E.T. El extraterrestre, Metrópolis, Gravity, Jurassic Park
const arrayMovies = ['tt1618434', 'tt1618434','tt1618434','tt1454468','tt0107290']; 

let arrayData= [];
arrayMovies.forEach(element => {
	fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
	.then(response => response.json())
	.then(json => arrayData.push(json))
});

console.log(arrayData);
