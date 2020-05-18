/*
window.onload = function(){


    fetch("https://api.themoviedb.org/3/tv/{tv_id}?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")

      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(serie) {
        console.log(serie);
       var urlImg = "https://image.tmdb.org/t/p/original/"

      document.querySelector(".posterSerie").innerHTML = "<img src='"+ urlImg + serie.poster_path+ "'style='width:300px;'>";


        document.querySelector("h1").innerHTML = serie.title;
        document.querySelector(".fecha").innerHTML= serie.release_date;
        document.querySelector(".sipnopsis").innerHTML= serie.overview;
        document.querySelector(".lenguaje").innerHTML= serie. original_language;

       var genero= serie.genres
       for (i=0; i< serie.length; i++) {
         serie.genres[i]
         document.querySelector(".generoDetalle").innerHTML= "<a href='generos.html'>"+serie.genres[i].name+"</a>"
   }
  })
  var url = "https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US"
  fetch(url)
    .then(function(response){
      return response.json();
      })
      .then(function(serieTrailer) {
       console.log(serieTrailer);
       console.log(serieTrailer.results[0].key);
        var urlTrailer= '<iframe width="850" height="472" src="https://www.youtube.com/embed/'+ serieTrailer.results[0].key +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        document.querySelector(".infoDeSerie").innerHTML= urlTrailer;

        })
         .catch(function(error) {
           console.log("the error was: " + error);
          })


  fetch("https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var series = datos.results
      console.log(series);

      for (var i = 0; i < series.length; i++) {
        document.querySelector(".contenedor-recomendados").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idserie='+series[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + series[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
      }
    })

  }
   aca probamos distintas maneras de hacerlo pero quedamos con la siguiente*/
var urlParams = new URLSearchParams(location.search);

var idSerie =  urlParams.get('idPeli');
console.log(idSerie);

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

   detalleSerie.innerHTML += "<h4>Sinopsis:</h4> <p>" + data.overview + "</p>";

   detalleSerie.innerHTML += "<h4>Al aire desde:</h4> <p>" + data.first_air_date + "</p>";
   detalleSerie.innerHTML += "<h4>Idioma Original:</h4> <p>"+ data.original_language + "</p> "
   if (data.genres == "undefined") {

   }
   else {
     detalleSerie.innerHTML += "<h4>Genero:</h4><p>" + data.genres[1].name + "</p>";
   }

 })
 .catch(function (error) {
   console.log(error);

 })
 // fetch(`https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${API_KEY}&language=en-US`)
 //   .then(function (response) {
 //     return response.json();
 //   })
 //   .then(function(data) {
 //     console.log(data);
 //     // cosas para meter en el html el contenido
 //     var trailerSerie = document.querySelector('.trailers');
 //     var trailer = data.results;
 //     for (var i = 0; i < trailer.length; i++) {
 //      trailerSerie.innerHTML  = '<iframe width="560" height="315"src="https://www.youtube.com/embed'+ data.results[i].key + '"></iframe>'

 //fetch(`https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${API_KEY}&language=en-US`)
//  .then(function (response) {
  //  return response.json();
//  })
//  .then(function (data) {
//    console.log(data);
    // cosas para meter en el html el contenido
  //  var detalleSerie = document.querySelector('.trailers');
  //  var trailer = data.results;
  //  for(var i = 0; i < trailer.length; i++) {
  //    detalleSerie.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + data.results[idSerie].key +'"></iframe>'
  //  }
  //})
  //var url = "https://api.themoviedb.org/3/movie/ "+idPelicula+"/videos?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US"
  fetch("https://api.themoviedb.org/3/tv/"+ idSerie +"/videos?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")
    .then(function(response){
      return response.json();
      })
      .then(function(peliculaTrailer) {
       console.log(peliculaTrailer);
       console.log(peliculaTrailer.results[0].key);
        var urlTrailer= '<iframe width="850" height="472" src="https://www.youtube.com/embed/'+ peliculaTrailer.results[0].key +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        document.querySelector(".detalle-serie").innerHTML += urlTrailer;

        })
         .catch(function(error) {
           console.log("the error was: " + error);
          })
