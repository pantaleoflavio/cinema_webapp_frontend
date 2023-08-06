$(document).ready(function(){   
    //var video = document.getElementById( 'video' );
    var video = $( '#video' );
    var videoCover = $( '#video-overlay');
    var playBtn =  $( '#video-play');

    if ( video ) {
        video.on( 'ended', function() {
            alert('video ended!' );
        });
    
        playBtn.on( 'click', function() {
            videoCover.addClass('hidden');
            video.get(0).play();
            //video.play();
        });
    }

});