window.onload = function(){

  // esto es para el menu que se desplaza para abajo cuando te paras arriba de generos
  //anda y busca en este link las appis y transformalas en json para listearlas
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
      console.log(respuesta);
    })
  //ahora agarra en especial los generos y traelos como arrays infinitos
    .then(function(informacion) {
      var arrayGeneros = informacion.genres
      for (var i = 0; i < arrayGeneros.length; i++) {
        var nombre = arrayGeneros[i].name
        var id = arrayGeneros[i].id
        var li;
  //estructura que va a linkear donde posicionarlos
        li = '<li>'
        li += '<a href=Generos.html?idGenero=' + id + '&genero='+nombre+'>' + nombre + '</a>'
        li += '</li>'
  //estilo selector para los genros
        document.querySelector("ul.gen").innerHTML += li
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })


// POPULARES
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(response){
      return  response.json();
    })
    .then(function(data){
      var array = data.results
      var ul = document.querySelector('.ul-populares')
      // console.log(array)
      for (serie of array) {
        var li = `
       <a href="series.html?idPeli=`+ serie.id +`>
          <li>
              <div class="uk-panel">
                  <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">

              </div>
          </li>
        </a>
        `
        ul.innerHTML += li;
      }

    })
    .catch(function(error){
      console.log(error)
    })


// AL AIRE

    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(response){
      return  response.json();
    })
    .then(function(data){
      var array = data.results
      var ul = document.querySelector('.ul-alaire')
      console.log(array)
      for (serie of array) {
        var li = `
       <a href="series.html?idPeli=`+ serie.id +`>
          <li>
              <div class="uk-panel">
                  <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">

              </div>
          </li>
        </a>
        `
        ul.innerHTML += li;
      }

    })
    .catch(function(error){
      console.log(error)
    })
// MEJOR PUNTUADAS
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
.then(function(response){
  return  response.json();
})
.then(function(data){
  var array = data.results
  var ul = document.querySelector('.ul-mejorpuntuadas')
  console.log(array)
  for (serie of array) {
    var li = `
   <a href="series.html?idPeli=`+ serie.id +`>
      <li>
          <div class="uk-panel">
              <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">

          </div>
      </li>
    </a>
    `
    ul.innerHTML += li;
  }

})
.catch(function(error){
  console.log(error)
})

fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")
.then(function(response){
  return  response.json();
})
.then(function(data){
  var array = data.results
  var ul = document.querySelector()
  console.log(array)
  for (serie of array) {
    var li = `
   <a href="TUDETALLEDESERIE*">
      <li>
          <div class="uk-panel">
              <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">

          </div>
      </li>
    </a>
    `
    ul.innerHTML += li;
  }

})
.catch(function(error){
  console.log(error)
})
// esto es para que en home me de el detalle de las series
var API_KEY = "a3f9467ae2c29b7ede89cca0ca14d893"
var URL_DETALLE = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${API_KEY}&language=en-US`;

fetch(URL_DETALLE)
 .then(function (response) {
   return response.json();
 })
 .then(function (data) {
   console.log(data);
   // cosas para meter en el html el contenido
   var detalleSerie = document.querySelector('.detalle-serie');

   if (data.poster_path) {
     detalleSerie.innerHTML += '<img src="https://image.tmdb.org/t/p/w500/'+ data.poster_path + '">'
   }
   detalleSerie.innerHTML += "<h2>"+ data.name + "</h2>";

   detalleSerie.innerHTML += "<h4>Sinopsis:</h4><p>" + data.overview + "</p>";
   detalleSerie.innerHTML += "<h4>Al aire desde:</h4><p>" + data.first_air_date + "</p>";
   detalleSerie.innerHTML += "<h4>Idioma Original:</h4><p>"+ data.original_language + "</p> ";

 })
 .catch(function (error) {
   console.log(error);

 })

// <li><a href="series.html?idGenre=00000&nameGenre=action">Action</a></li>


}
