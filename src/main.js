'use strict'

let html = document.getElementById('root');

document.getElementById('search-bar').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=fbdf5d5c`)
		.then(response => response.json())
		.then(json => {
			console.log(json);
			// html.innerHTML = '';
			// html.className = 'custom-card'
			json.Search.map((i) => {
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
		
		document.getElementById('todo').style.display='none';
	}
});


//Ciencia Ficción Star Wars, E.T. El extraterrestre, Metrópolis, Gravity, Jurassic Park
document.getElementById('action').addEventListener('click', () => {
	const moviesAction = ['tt0437086','tt2294629']; 
	let arrayData= [];
	moviesAction.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
		.then(response => response.json())
		.then(json => arrayData.push(json))
	});
	console.log(arrayData);

});