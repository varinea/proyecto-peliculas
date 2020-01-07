'use strict'

let html = document.getElementById('root');

document.getElementById('search-bar').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		html.innerHTML = ""
		fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				// html.innerHTML = '';
				// html.className = 'custom-card'
				json.Search.map((i) => {
					html.innerHTML += `<div class="card-group col-2 custom-card">
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

		document.getElementById('todo').style.display = 'none';
	}
});


//BOTON de ACCIÓN - VARINEA--

document.getElementById('action').addEventListener('click', () => {
	const moviesAction = ['tt8106534', 'tt0437086', 'tt7456310', 'tt4154664', 'tt7961060', 'tt6146586', 'tt9817236', 'tt6320628', 'tt6450804', 'tt4154796'];
	html.innerHTML = ""
	moviesAction.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de AVENTURA - VARINEA--

document.getElementById('aventure').addEventListener('click', () => {
	const moviesAventure = ['tt7975244', 'tt6141246', 'tt6139732', 'tt6054846', 'tt10874292', 'tt4912910', 'tt8995218', 'tt1365519', 'tt1677720', 'tt1477834'];
	html.innerHTML = ""
	moviesAventure.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de BIOGRAFIA - VARINEA--

document.getElementById('biography').addEventListener('click', () => {
	const moviesBiography = ['tt1302006', 'tt8404614', 'tt6394270', 'tt5116302', 'tt6141246', 'tt11199464', 'tt1950186', 'tt3513548', 'tt3224458', 'tt7984766'];
	html.innerHTML = ""
	moviesBiography.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});


//BOTON de DOCUMENTAL - VARINEA--

document.getElementById('documentary').addEventListener('click', () => {
	const moviesDocumentary = ['tt9351980', 'tt8923482', 'tt9358044', 'tt9358204', 'tt9412098', 'tt9573980', 'tt8760684', 'tt8299654', 'tt8991268', 'tt9617456'];
	html.innerHTML = ""
	moviesDocumentary.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de FANTASIA - VARINEA--

document.getElementById('fantasy').addEventListener('click', () => {
	const moviesfantasy = ['tt4777008', 'tt2935510', 'tt6324278', 'tt4682804', 'tt1025100', 'tt1560220', 'tt6450804', 'tt5606664', 'tt4520988'];
	html.innerHTML = ""
	moviesfantasy.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});


//BOTON de ANIMACION - VARINEA--

document.getElementById('animated').addEventListener('click', () => {
	const moviesAnimated = ['tt4520988', 'tt4729430', 'tt2386490', 'tt6428676', 'tt5113040', 'tt1979376', 'tt4199898', 'tt6095472', 'tt5814534', 'tt1620981'];
	html.innerHTML = ""
	moviesAnimated.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de MISTERIO - VARINEA--

document.getElementById('mystery').addEventListener('click', () => {
	const moviesMystery = ['tt5886046', 'tt1860242', 'tt8946378', 'tt7798634', 'tt7984734', 'tt3387520', 'tt5884052', 'tt8155288', 'tt4332232', 'tt2935510'];
	html.innerHTML = ""
	moviesMystery.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de Sci-Fi - VARINEA--

document.getElementById('sci').addEventListener('click', () => {
	const moviesSci = ['tt0379786', 'tt7605074', 'tt4154664', 'tt5884052', 'tt8155288', 'tt6418778', 'tt6823368', 'tt9204204', 'tt5886046', 'tt6146586'];
	html.innerHTML = ""
	moviesSci.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});

//BOTON de SUSPENSO - VARINEA--

document.getElementById('suspense').addEventListener('click', () => {
	const movieSuspense = ['tt6823368', 'tt0379786', 'tt2481498', 'tt5719748', 'tt8155288', 'tt0437086', 'tt7134096', 'tt8350360', 'tt6857112', 'tt5968394'];
	html.innerHTML = ""
	movieSuspense.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});


//BOTON de SUPERHERO - VARINEA--

document.getElementById('hero').addEventListener('click', () => {
	const movieSuperHero = ['tt6823368', 'tt4154664', 'tt0448115', 'tt2274648', 'tt4154796', 'tt10440726', 'tt6320628', 'tt7286456', 'tt4682266', 'tt1206546'];
	html.innerHTML = ""
	movieSuperHero.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
			.then(response => response.json())
			.then(data => {
				html.innerHTML += `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
			})
	})
	document.getElementById('todo').style.display = 'none';
});


// SECCIÓN ESTRENOS- VARINEA--

let estPremiere = document.getElementById('premiere');
const moviesEstreno = ['tt2058617', 'tt0026529', 'tt5190732', 'tt1537860', 'tt1502397'];
 // para que no se impriman otras paginas/botones al seleccionarla
moviesEstreno.forEach(element => {
	fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
		.then(response => response.json())
		.then(data => {
			estPremiere.innerHTML += 
		`
		<div class="card-group col-2 custom-card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		`;
		})
})

// SERIESTV- VARINEA--

let estMovies = document.getElementById('serieTv');
const serieTv = ['tt3728462', 'tt0026529', 'tt5190732', 'tt1537860', 'tt1502397'];
 // para que no se impriman otras paginas/botones al seleccionarla
 serieTv.forEach(element => {
	html.className= 'custom-container row';
	fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
		.then(response => response.json())
		.then(data => {
			estMovies.innerHTML += 
		`
		<div class="card-group col-2 custom-card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		`;
		})
});


//Ciencia Ficción Star Wars, E.T. El extraterrestre, Metrópolis, Gravity, Jurassic Park
// document.getElementById('action').addEventListener('click', () => {
// 	const moviesAction = ['tt0437086','tt0437086']; 
// 	let arrayData= [];
// 	moviesAction.forEach(element => {
// 		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
// 		.then(response => response.json())
// 		.then(json => arrayData.push(json))
// 	});
// 	console.log(arrayData);

// });
