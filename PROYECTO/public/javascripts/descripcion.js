

fetch('https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US')
.then(function(response){
  return response.json();
})
.then(function(obj) {
  console.log(obj);
  for (var i = 0; i < obj.results.length; i++) {
    document.querySelector('body').innerHTML += '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+obj.results[i].key+'"></iframe>'
  }
})
.catch(function(error){
  console.log(error);
})
