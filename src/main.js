'use strict'


let searchBar=document.getElementById('search-bar').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=fbdf5d5c`)
		  .then(response => response.json())
		  .then(json => console.log(json))
	  
	}
  });


// //Ciencia Ficción Star Wars, E.T. El extraterrestre, Metrópolis, Gravity, Jurassic Park
// //const moviesSciFi = ['tt0076759', 'tt0083866','tt0472646','tt1454468','tt0107290']; 

// let arrayData= [];
// moviesSciFi.forEach(element => {
// 	fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
// 	.then(response => response.json())
// 	.then(json => arrayData.push(json))
// });
// console.log(arrayData);
