"use strict";
var nbr = 0;
var change = function (n) {
    nbr += n;
    display();
};
var display = function () {
    var inp = document.getElementById("number");
    if (inp != null) {
        inp.value = nbr.toString();
        inp.style.textAlign = "center";
        inp.style.width = "100px";
        inp.style.color = (nbr % 2 == 0) ? "red" : "black";
        inp.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
        inp.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    }
};
