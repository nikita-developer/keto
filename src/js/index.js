
$(document).ready(function() {
    $('.js-join__slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav: true
    });

    $('.js-commit__slide').owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive : {
            0 : {
                nav: false,
            },
            481 : {
                nav: true,
            },
        }
    });

// запуск таймеров
    var clock;
    var futureDate = new Date("Mart 17, 2020 0:00 PM EDT");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.js-timer').addClass('twoDayDigits');
    } else {
        $('.js-timer').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
    }
    clock = $('.js-timer').FlipClock(diff, {
        clockFace: 'DailyCounter',
        language: 'ru',
        countdown: true
    });
// запуск таймеров конец

    $(document).mouseup(function (e){
		var div = $('.js-popap .container');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.js-popap').fadeOut();
            $('body, html').removeClass('hide_body');
		}
	});

    // Cкролл к форме
    $('.js-scrollTop').click(function () {
        var destination = $('.form').offset().top;
        $('html, body').animate({ scrollTop: destination }, 1100);
    });

    // Всплывающие окна
    $($('.popup')).click(function (e){
		var div = $('.popup .popup__box');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('body, html').removeClass('hide_body');
			$('.popup').fadeOut();
		}
	});

    $('.footer__item').click(function () {
        $('body, html').addClass('hide_body');
        var index = $(this).index()
        $('.popup').fadeOut();
        $('.popup').eq(index).fadeIn();
    })

    $('.popup__close').click(function () {
        $('body, html').removeClass('hide_body');
        $('.popup').fadeOut();
    })
});
