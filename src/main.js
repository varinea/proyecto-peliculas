'use strict'

let html = document.getElementById('root');

document.getElementById('search-bar').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) { // keyCode, el usuario cuando aprete enter llamara a la api
		fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(json => {
				json.Search.map((i) => {
					html.innerHTML +=  `<div class="card-group col-2">
					<div class="card">
					  <img class="card-img-top" src="${i.Poster}" alt="Card image cap">
					  <div class="card-body">
						<h5 class="card-title">${i.Title}</h5>
						<p class="card-text">${i.Type}</p>
						<p class="card-text"><small class="text-muted">${i.Year}</small></p>
					  </div>
					</div>`;
				})
			})
	}
});


// BOTON ACCIÓN   VARINEA
document.getElementById('fighter').addEventListener("click", () => {
	
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=71949b65aff64acdb6a0fce55fb7fb1d&sort_by=popularity.desc&page=1&primary_release_date.gte=2019-01-01%27`)
			.then(response => response.json())
			.then(json => {
				console.log(json.)
				})
			}

	
);





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
