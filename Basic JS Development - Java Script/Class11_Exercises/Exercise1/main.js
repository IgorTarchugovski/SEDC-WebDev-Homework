/*
    1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.
*/

$(document).ready(function() {



    $('#addBtn').click (function(e){
        e.preventDefault();
        let name = $('#name').val();
        let author = $('#author').val();
        let tel = $('#tel').val();
        let date = $('#date').val();
        console.log(name, author, tel, date);

        $('#bookList').append(`
            <h3>Result:</h3>
            <li><strong>Naslov na knigata:</strong>  ${name}</li>
            <li><strong>Avtor na knigata:</strong>  ${author}</li>
            <li><strong>Telefon:</strong>  ${tel}</li>
            <li><strong>Datum:</strong>  ${date}</li>
        `);
    });














});
