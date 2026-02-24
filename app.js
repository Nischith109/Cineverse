let defaultval="avenger"

function findmovie(){
    let searchmovie =document.getElementById("searchhere");
    let searchval=searchmovie.value;
    defaultval = searchmovie.value;
    defaultval=searchval;
    console.log(searchval);
    console.log(defaultval)
    getMovie();
    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
}
async function getMovie() {
    let movies= await fetch(`Your API Key`);
    movies = await movies.json();
    let omdMovies=document.getElementById("showmoviedetails")
    omdMovies.innerHTML="";
    if(movies.Response=="False"){
        omdMovies.innerHTML=`<h2>${movies.Error}</h2>`
        return;
    }
    movies.Search.map((movie)=>{
        return omdMovies.innerHTML+=`
        <div class="moviecard">
        <div><h3>${movie.Title}</h3></div>
        <div class ="movieimg">
        <img src="${movie.Poster=="N/A"?" ./no_image_available.png":movie.Poster}">
        </div>
        <div>${movie.Year}</div>
        </div>
        `;
    });
    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });

}
getMovie();

