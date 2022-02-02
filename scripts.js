$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active animate__animated animate__slideInRight').css('z-index', 10);
        }
    })
    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
    
        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active animate__animated animate__slideInLeft').css('z-index', 10);
        }
    })
})

$(document).ready(function(){

    setInterval(swapImages,5000);

    function swapImages(){

        var active = $('.active'); 
        var next = ($('.active').next().length > 0) ? $('.active').next() : $('.first-img');

        active.removeClass('active');
        next.addClass('active');
    }
});