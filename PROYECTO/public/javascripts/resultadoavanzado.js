window.addEventListener('load',function(){

  var search = new URLSearchParams(window.location.search);
  var incluir = search.get('incluir')
  console.log(incluir);
  var excluir = search.get('excluir')
  console.log(excluir);
  var orden = search.get('orden')
  console.log(orden);
  var anio = search.get('anioElegido')
  console.log(anio)


  fetch("https://api.themoviedb.org/3/discover/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&sort_by="+orden+"&first_air_date_year="+ anio + "&page=1&with_genres="+incluir+"&without_genres="+excluir)
    .then(function(respuesta){
      return respuesta.json();
  })
  .then(function(datos){
    // console.log(datos);

    var arrayDeSeries = datos.results
    console.log(arrayDeSeries);
    var ul = document.querySelector('.ul-fotos')
    var li = ""
     //parte fija img
     var urlIMG = "https://image.tmdb.org/t/p/original/"
    //recorro el array
 for (var i=0; i < arrayDeSeries.length; i++){

      li = "<li>"
       li += "<a href='detalle.html?idPelicula="+arrayDeSeries[i].id+"'>"
       li += "<p>" + arrayDeSeries[i].original_name + "</p>"
       li += "<img src = '" + urlIMG + arrayDeSeries[i].poster_path + "' style='width:300px;'>"
       li += "</a>"
       li += "</li>"
       ul.innerHTML += li;

 }
})
})
