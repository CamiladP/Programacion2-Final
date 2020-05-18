window.addEventListener('load', function(){
  //esto es para que cuando busques, si escribis 2 caracteres, arroje error
    document.querySelector("form.buscar").onsubmit = function(e) {
    var busco = document.buscar.buscador.value;
    console.log(busco);
    // var buscadorInput = document.querySelector("input")
    if (busco.length <= 3) {
      e.preventDefault()
      UIkit.notification({message: 'Ingrese mas de tres caracteres', status: 'warning',  timeout: 2000})
    }else {
    }
  }
})
