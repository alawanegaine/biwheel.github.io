$( document ).ready(function() {
    
    // Checking there's a snackbar to show
    if($('#snackbar').length) {

        // Show the snackbar and then shift the banner in order to display correctly all banner section
        $('#snackbar').addClass('show');
        $('.banner-main').css('top', '75px')
    }
});

$('#snackbar-close').click(function() {
    // Remove the snackbar and the snacbar conditions section
    $('#snackbar').removeClass('show');
    $('#snackbar').remove();
    $('#snackbar-conditions').remove();

    // Put the banner section in the origin place
    $('.banner-main').css('top', '0px')
});