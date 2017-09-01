"use strict";

var selectedMovieIndex = 0,
    actionMovies;

function getHTTP(url, onSuccess){
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.addEventListener("load",function(loadeventargs){
        onSuccess(ajaxRequest.responseText);
    });

    ajaxRequest.addEventListener("error",function(erroreventargs){
        console.log("error with the AJAX request");
    })

    ajaxRequest.open("GET", url, true);
    ajaxRequest.send();
}

function constructMovieElement(movieMetaData){

    var movielistitem = document.createElement("li");
    movielistitem.classList.add("recommendations__movie");

    // construct the movie header
    var movieTitleHeader = document.createElement("h1");
    movieTitleHeader.innerText = movieMetaData.title;

    movielistitem.appendChild(movieTitleHeader);

    return movielistitem;
}

getHTTP("http://test.competa.com/js-movies-test/data/movies-json.php", function(rawJSON){
    var movieRecommendations = JSON.parse(rawJSON);

    var localActionMovies = new Array();

    movieRecommendations.data.forEach(function(recommendationslist) {
        
        recommendationslist.assets.forEach(function(movieMetaData) {
            
            if(movieMetaData.genre == "Action"){
                localActionMovies.push(movieMetaData);
            }

        }, this);

    }, this);

    actionMovies = localActionMovies;

});

var leftbutton = document.getElementById("btn-left");
leftbutton.addEventListener("click",function(me){

    if(selectedMovieIndex == 0){
        selectedMovieIndex = (actionMovies.length -1);
    }else{
        selectedMovieIndex--;
    }

});

var rightbutton = document.getElementById("btn-right");
rightbutton.addEventListener("click",function(me){

    //get the currently selected element
    actionMovies[currentelement].classList.removeClass("recommendations__movie--visible");
    
    if(selectedMovieIndex == (actionMovies.length -1)){
        selectedMovieIndex = 0;
    }else{
        selectedMovieIndex++;
    }

    actionMovies[currentelement].classList.addClass("recommendations__movie--visible");

});

