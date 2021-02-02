// 4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

$(document).ready(function() {

    $('#currentContent').show();
    $('#archivedContent').hide();
    $('#upcomingContent').hide();

    $('#currentBtn').click(function() {
        $('#currentContent').show();
        $('#archivedContent').hide();
        $('#upcomingContent').hide();
    });

    $('#archivedBtn').click(function() {
        $('#currentContent').hide();
        $('#archivedContent').show();
        $('#upcomingContent').hide();
    });

    $('#upcomingBtn').click(function() {
        $('#currentContent').hide();
        $('#archivedContent').hide();
        $('#upcomingContent').show();
    });

});