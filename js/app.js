let ApiKey = 'http://www.omdbapi.com/?apikey=4f9e6d5d&t=';
let loadingStatus = false;
let img= document.getElementById('img');
let title = document.getElementById('title')
let desc = document.getElementById('desc');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let awards = document.getElementById('awards');
let ratings = document.getElementById('ratings');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let released = document.getElementById('released');
let writer = document.getElementById('writer');
let errorContainer = document.getElementById('errorContainer')
let movieContainer = document.getElementById('movieContainer')
movieContainer.classList.add('d-none')
errorContainer.classList.add('d-none')



//loader
function checkLoaderStatus(){
    let intro = document.getElementById('intro');
    intro.style.display='none';
    let loader= document.getElementById('loader');
   if(loadingStatus == true){
    loader.classList.add('loader')
   }
   else{
    loader.classList.remove('loader')
   }
}


//add parameters to elements
function renderMovie(data){
    img.src = data.Poster;
    title.innerText = data.Title;
    desc.innerText = data.Plot;
    actors.innerText = data.Actors;
    director.innerText = data.Director;
    awards.innerText = data.Awards;
    ratings.innerText = data.imdbRating;
    collection.innerText = data.BoxOffice;
    genre.innerText = data.Genre;
    released.innerText = data.Released;
    writer.innerText = data.Writer;
   

}


//fetch function
 function fetchMovieDetails(){
        loadingStatus = true;
        checkLoaderStatus()    

    let movieName= document.getElementById("movieName");
    let apiQuery = ApiKey + movieName.value;
    console.log(apiQuery);


        fetch(apiQuery).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            
            if(data.Error == 'Movie not found!'){


             movieContainer.classList.add('d-none')
            errorContainer.classList.remove('d-none');
            loadingStatus = false;
            checkLoaderStatus();

        
    }
    else{
       
            loadingStatus = false;
            checkLoaderStatus();

            renderMovie(data);

            movieContainer.classList.remove('d-none')
            errorContainer.classList.add('d-none')
    }

})
    
 
    }


