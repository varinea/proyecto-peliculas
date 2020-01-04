'use strict'

//const search_bar=document.getElementById("search-bar").value;
document.getElementById('comedy').addEventListener('click', cargarJSON);

function cargarJSON(){
	fetch('comedy.json')
	.then(function(response){
		return response.json();
	})
	.then(function(json){
		let html = '';
		json.forEach(function(element){
			html += `
			<li> ${element.title} ${element.year}</li>
			`;
		})
		document.getElementById('root').innerHTML = html;
	})

}

