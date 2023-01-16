key = "http://www.omdbapi.com/?i=tt3896198&apikey=719b49c";

let movieNameref=document.getElementById("movieName");
let searchBtn=document.getElementById("search");
let result=document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameref.value ;
  let url = `https://www.omdbapi.com/?t=${movieName}& apikey=${key}`;

  if(movieName.length <= 0){
    result.innerHTML=`<h3 class="msg">Please Enter A Movie Name</h3>`
  }
  else{
    fetch(url)
    .then((resp) => resp.json())
    .then(async(data) => {
      if(data.Response == "True"){
      result.innerHTML=`
      <div class="info">
      <img src=${data.Poster} class="poster" alt="img">
        <div>
        <h2>${data.Title}</h2>
          <div class="ratting-info">
          <img src="img/icons8-star-filled-30.png">
          <h4>${data.imdbRating}</h4>
          </div>
          <div class="details">
          <span>${data.Rated}</span>
          <span>${data.Year}</span>
          <span>${data.Runtime}</span>
          <span> released: ${data.Released}</span>
          </div>
          <div class="genre">
          <div>${data.Genre.split(",").join("</div><div>")}</div>
          </div>
        </div>
      </div>
      <h3>Plot:</h3>
      <p>${data.Plot}</p>
      <h3>Cast:</h3>
      <p>${data.Actors}</p>
      <h3>Awards:</h3>
      <p>${data.Awards}</p>
      `
      }else{
        result.innerHTML=`<h3 class="msg">${data.Error}</h3>`
      }
    })
    .catch(()=>{
      result.innerHTML=`<h3 class="msg">Error</h3>`
    })
  }
}
searchBtn.addEventListener("click",getMovie)
window.addEventListener("load", getMovie)
movieNameref.addEventListener("keypress",function(event){
  if(event.key=== "Enter"){
    searchBtn.click();
  }
})