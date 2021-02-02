// 5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.
// Dodatno sliki

$(document).ready(function(){
    
    $('#citiesBtn').click(function(){
        $.ajax({
            url:"https://api.openaq.org/v1/cities",
            success: function(result) {
                if (result !== undefined && result.length > 0) {

                }
            }, 
            error: function(error) {
            console.error(error);
            }
        })
    })


});