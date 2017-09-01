"use strict";

//get the images
var currentimage = 0;
var Images = document.querySelectorAll(".product-carrousel img");

function resetimage(){
    Images.forEach(function(obj){
        obj.classList.remove("image-visible");
    });
}

//get the buttons
var NewImageLeftBtn = document.getElementById("carrousel-left");
var NewImageRightBtn = document.getElementById("carrousel-right");

//bind a click eventhandler to both buttons
NewImageLeftBtn.addEventListener("click",function(me,obj){

    //hide all images
    resetimage();

    if(CurrentImage == 0){
        //we're at the beginning of the array, set currentimage to the end of the array
        CurrentImage = Images.length - 1;
    }else{
        //we,re not at the end, decrease the currentimage value
        CurrentImage--
    }

    Images[CurrentImage].classList.add("image-visible");
});

NewImageRightBtn.addEventListener("click",function(me,obj){

    //hide all images
    resetimage();

    if(CurrentImage == Images.length - 1){
        //we're at the end of the array, set currentimage to the beginning of the array
        CurrentImage = 0;
    }else{
        //we're not at the end, decrease the currentimage value
        CurrentImage++
    }

    Images[CurrentImage].classList.add("image-visible");
});

//onclick then we gotta switch to left and right