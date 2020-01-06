'use strict'

let html = document.getElementById('root');

document.getElementById('search-bar').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				json.Search.map((i) => {
					html.innerHTML = '';
					html.innerHTML +=  `<div class="card-group col-2 custom-card">
					<div class="card">
					  <img class="card-img-top custom-img" src="${i.Poster}" alt="Card image cap">
					  <div class="card-body">
						<h5 class="custom-title">${i.Title}</h5>
						<p class="card-text">${i.Type}</p>
						<p class="card-text"><small class="text-muted">${i.Year}</small></p>
					  </div>
					</div>`;
				})
			})

	}
});




// `<i>${i.Title}</i><br>`;


// //Ciencia Ficción Star Wars, E.T. El extraterrestre, Metrópolis, Gravity, Jurassic Park
// //const moviesSciFi = ['tt0076759', 'tt0083866','tt0472646','tt1454468','tt0107290']; 

// let arrayData= [];
// moviesSciFi.forEach(element => {
// 	fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
// 	.then(response => response.json())
// 	.then(json => arrayData.push(json))
// });
// console.log(arrayData);
