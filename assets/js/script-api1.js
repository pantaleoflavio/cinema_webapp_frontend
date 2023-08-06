$(document).ready(
    function() {
        var isFetchingUsers = false;

        $('.search').on( 'click', fetchUsers );



        function fetchUsers() {

            if( !isFetchingUsers ) {

                $.ajax({
                    method: "GET",
                    // url: "https://reqres.in/api/unknown/23",
                    //url: "https://reqres.in/api/users",
                    url: "https://reqres.in/api/users?delay=3",
                    data: {},
                    cache: false,
                    async: true,
                    timeout: 8000,
                    beforeSend: function() {
                        isFetchingUsers = true;
                        $('#preloader').addClass('open');
                        console.log( 'beforeSend' );
                    },
                    success: function( data, textStatus, jqXHR ) {
                        console.log( 'success', data, textStatus, jqXHR );
                        alert( "success" );
                    },
                    error: function( jqXHR, textStatus, errorThrown ) {
                        console.log( 'error', jqXHR, textStatus, errorThrown );
                        alert( "error" );
                    },
                    complete: function( jqXHR, textStatus ) {
                        console.log( 'complete', jqXHR, textStatus );
                        $('#preloader').removeClass('open');
                        isFetchingUsers = false;
                    }

    
                  });
            }
            
              
              
              
              /*
              .done(function( msg ) {
                console.log( 'success', msg.data );
              }).fail(function( jqXHR, textStatus  ) {
                console.log( 'failure', jqXHR, textStatus  );
              });*/
        }
    }
);