window.onload = function(){
  var anioDeEstreno = document.querySelector(".anio")
  var opcionesFe;
console.log(anioDeEstreno);
  for (var i = 1950; i < 2020; i++) {
    opcionesFe = '<option>'
    opcionesFe +=   i
    opcionesFe += '</option>'
    anioDeEstreno.innerHTML += opcionesFe

  }
  var generoID = new URLSearchParams(location.search).get('idGenero');
  var li ;
  //Esto revisa las condiciones para ejecutar la busqueda
  var buscador = document.querySelector(".buscadorAvanzado");
  var input = document.querySelector("form.buscador input");
  buscador.onsubmit = function(event){
    if (input.value == "") {
      event.preventDefault();
    } else if (input.value.length < 3) {
      event.preventDefault();
      alert("Debe haber un minimo de 3 letras para buscar");
    }
  }

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
        var opciones;
  //estructura que va a linkear donde posicionarlos
        opciones = '<option value="'+id+'">'
        opciones +=   nombre
        opciones += '</option>'
  //estilo selector para los genros
        document.querySelector(".buscincl").innerHTML += opciones
        document.querySelector(".buscexcl").innerHTML += opciones
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
  }
