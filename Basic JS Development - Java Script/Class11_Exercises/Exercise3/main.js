// 3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

$(document).ready(function(){

    let changeSize = $('.changeSize').css("font-size");
    let currentSize = parseInt(changeSize);

    let startingBtn = $('#starting').click(function () {
        $('.changeSize').css("font-size", currentSize);
    });

    let increasedBtn = $('#increased').click(function () {
        $('.changeSize').css("font-size", currentSize+5);
        
    });

    let reduceBtn = $('#reduce').click(function () {
        $('.changeSize').css("font-size", currentSize-5);
        
    });

});