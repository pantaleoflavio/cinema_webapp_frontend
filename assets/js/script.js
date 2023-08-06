$(document).ready(function(){

    var current = 0;
    var heroGallery = $('#hero-gallery');
    var slideShow = $('#slideshow');
    var slides = slideShow.find('.slide');
    var dots =  heroGallery.find('.dots');
    
    var slideshowInterval;
    var resizeTimeout;
    var slideCounter = slides.length;
    var arrowBtns = heroGallery.find('.galley-nav-btn');
    
    var viewportWidth;
    
    var init = function () {
        setSlideshow(); 
        initSlideshow();
    
        arrowBtns.on('click', handleArrows);
        dots.on('click', handleDotsClick);


        slideShow.on('mouseenter', stopSlideshow);
        slideShow.on('mouseleave', playSlideshow);
    
    
        window.onresize = function () {
            
            if ( slideshowInterval) {
                stopSlideshow();
            }
    
            clearTimeout ( resizeTimeout );
            resizeTimeout = setTimeout( handleResize, 250);
    
        };

        $('#login-btn').on('click', function () {
            $('#myModal').modal();
        } );
        
    };
    
    init();
    
    function handleResize () {
           setSlideshow();
           playSlideshow();
    }
    
    function initSlideshow() {
        slideshowInterval = setInterval ( handleSlideshow, 3000);
    }
    
    function setSlideshow() {
        viewportWidth = $(window).width();

        var galleryWidth = (viewportWidth * slideCounter) + 'px';
        slideShow.css( { width: galleryWidth } );

        slides.css( { width: viewportWidth + 'px' } );

        var newOffset = viewportWidth * current;
    
        slideShow.css( { transform: 'translatex(' + (-newOffset) + 'px)' }) ;
    
        
    }
    
    function handleSlideshow() {
        var next = current < slideCounter - 1 ? current + 1 :0;
        goToSlide( next );
    }
    
    function playSlideshow() {
        initSlideshow();
    }
    function stopSlideshow() {
        clearInterval (slideshowInterval);
    }
    
    function handleDotsClick() {
        stopSlideshow();
        var dotClicked = $(this);
        var next = parseInt(dotClicked.data('slide'), 10);
        
        goToSlide(next);
        playSlideshow();
    }
    
    function handleArrows( event ) {
        var btnClicked = $(this);
        var action = btnClicked.data('action');
        var next = 0;
    
            if ( action === 'p') {
                
                if ( current > 0) {
                    next = current - 1;
                } else {
                    next = slideCounter - 1;
                }
            } else if ( action === 'n'){
                if ( current < slideCounter - 1) {
                      next = current + 1;
                } else {
                    next = 0;
                }
            }
    
    
        goToSlide(next);
    }
    
    function goToSlide( next ) {
        var currentDot = $('[data-slide="'+ current +'"]');
        var nextDot = $('[data-slide="'+ next +'"]');
        
        currentDot.removeClass('active');
        nextDot.addClass('active');
    
        var newOffset = viewportWidth * next;
    
        slideShow.css( { transform: 'translatex(' + (-newOffset) + 'px)' } );
    
        setTimeout(function() {
            current= next;
        }, 500);
    
    }

});