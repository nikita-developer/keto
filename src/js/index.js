
$(document).ready(function() {
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true
        });
    });

    var clock;
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'ru'
    });
    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();
});
