$(document).ready(function(){
 
$('#fetch-users').on('click', fetchUsers);
    
    function fetchUsers() {
        $.ajax({
            method: "GET",
            //url: "https://reqres.in/api/unknown/23",
            //url: "https://reqres.in/api/users",
            url: "https://reqres.in/api/users?delay=3",
            data: {},
            cache: false,
            async: true,
            timeout:8000,
            beforeSend: function() {
                
                $('#preloader').addClass('open');
                console.log( 'beforeSend' );
            }

        })
        .done(function( data, textStatus, jqXHR ) {
            console.log( 'success', data, textStatus, jqXHR );
            alert('success');
            $('#preloader').removeClass('open');
          })
           
        .fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
            console.log( 'error', jqXHR, textStatus );
          })
        
    }
    

});