// 2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

$(document).ready(function() {

    $("tr:even").css("color", "red");
    $("td:first-child").css("background-color", "lightgray");
    $("td:last-child").css("background-color", "lightgray");

});