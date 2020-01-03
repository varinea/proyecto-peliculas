'use strict'


fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fbdf5d5c')
.then(response => response.json())
.then(json => console.log(json))
