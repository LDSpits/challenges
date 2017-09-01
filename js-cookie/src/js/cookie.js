"use strict";

function CookieCutter(size, haschocolatechips){
    this.size = size;
    this.hasChocolateChips = haschocolatechips;

    this.addChocolateChips = function(){
        this.hasChocolateChips = true;
    }

    this.removeChocolateChips = function(){
        this.hasChocolateChips = false;
    }
}

var cookie1 = new CookieCutter("medium", true);
var cookie2 = new CookieCutter("large",false);

console.log("cookie1 size: " + cookie1.size + ", cookie1 chocolate: " + cookie1.hasChocolateChips);
console.log("cookie2 size: " + cookie2.size + ", cookie2 chocolate: " + cookie2.hasChocolateChips);

cookie2.addChocolateChips();
cookie1.removeChocolateChips();

console.log("cookie1 size: " + cookie1.size + ", cookie1 chocolate: " + cookie1.hasChocolateChips);
console.log("cookie2 size: " + cookie2.size + ", cookie2 chocolate: " + cookie2.hasChocolateChips);