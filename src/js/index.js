
$(document).ready(function() {
    $('.js-join__slide').owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });

    $('.js-commit__slide').owlCarousel({
        items: 1,
        loop: true,
        responsive : {
            0 : {
                nav: false,
            },
            481 : {
                nav: true,
            },
        }
    });

    var clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        countdown: true,
        language: 'ru'
    });

    function getSecondsToTomorrow() {
        var now = new Date();
        // завтрашняя дата
        var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
        var diff = tomorrow - now;
        return Math.round(diff / 1000); // преобразуем в секунды
    }

    var $result = getSecondsToTomorrow();

    clock.setTime($result);      //Устанавливаем нужное время в секундах
    clock.setCountdown(true);   //Устанавливаем отсчет назад
    clock.start();              //Запускаем отсчет
});
