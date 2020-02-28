
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
    var futureDate = new Date("Mart 02, 2020 0:00 PM EDT");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.js-timerOne').addClass('twoDayDigits');
    } else {
        $('.js-timerOne').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
    }
    clock = $('.js-timerOne').FlipClock(diff, {
        clockFace: 'DailyCounter',
        language: 'ru',
        countdown: true
    });

    var clock2;
    var futureDate = new Date("Mart 02, 2020 0:00 PM EDT");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.js-timerTwo').addClass('twoDayDigits');
    } else {
        $('.js-timerTwo').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
    }
    clock2 = $('.js-timerTwo').FlipClock(diff, {
        clockFace: 'DailyCounter',
        language: 'ru',
        countdown: true
    });
// запуск таймеров конец

    $('.js-openPopap').click(function (e) {
        if($('.form').valid()) {
            $('.js-popap').fadeIn();
            $('body, html').addClass('hide_body');
            $('.form').trigger('reset');
            $('.form__field, .form__select').removeClass('valid');
            e.preventDefault();
            console.log(2);
        }
    })

    $(document).mouseup(function (e){
		var div = $('.js-popap .container');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.js-popap').fadeOut();
            $('body, html').removeClass('hide_body');
		}
	});

    $('.purchase__item').click(function (){
        var price = $('.js-price');
        var priceRetail = $('.js-priceRetail');
        var priceSave = $('.js-priceSave b');

        if($(this).index() == 0) {
            price.text('$136')
            priceRetail.text('Retail: $264')
            priceSave.text('You Save: $103')
            console.log(1);
        } else if ($(this).index() == 1) {
            price.text('$117')
            priceRetail.text('Retail: $132')
            priceSave.text('You Save: $44')
            console.log(2);
        } else {
            price.text('$5')
            priceRetail.text('Retail: $44')
            priceSave.text('You Save: $5')
            console.log(3);
        }

        $(this).find('.purchase__btn').text('SELECTED PACKAGE!');
        $('.purchase__item').removeClass('purchase__item_active');
        $('.purchase__item').find('.purchase__btn').text('SELECTED PACKAGE!');
        $(this).addClass('purchase__item_active').find('.purchase__btn').text('SELECTED!');
    })

    $('.form').validate({
        rules:{
            tel:{
                minlength: 6,
                maxlength: 18,
                number: true
            },
            ZipCode:{
                minlength: 2,
                maxlength: 18,
                number: true
            }
        }
    });

    $('.pay__form').validate({
        rules:{
            card:{
                minlength: 16,
                maxlength: 16,
                number: true
            },
            cvv:{
                minlength: 3,
                maxlength: 3,
                number: true
            },
            date:{
                number: true
            }
        }
    });

    $('.contact__form').validate({
        rules:{
            email:{
                email: true,
                required: true
            },
            tel:{
                required: true,
                number: true
            }
        }
    });

    $('.pay__submit').click(function (e) {
        if($('.pay__form').valid()) {
            $('.js-popap').fadeOut();
            $('body, html').removeClass('hide_body');
            $('.pay__form').trigger('reset');
            $('.pay__field, .pay__select').removeClass('valid');
            e.preventDefault();
            showError ();
        }
    })

    $('.section__close').click(function () {
        $('.js-popap').fadeOut();
        $('body, html').removeClass('hide_body');
        $('.pay__form').trigger('reset');
        $('.pay__field, .pay__select').removeClass('valid');
    })

    function showError () {
        $('.messageError').fadeIn();
        setTimeout(hideError, 7000);
    }

    function hideError () {
        $('.messageError').fadeOut();
    }

    function showSucses () {
        $('.messageSuccess').fadeIn();
        setTimeout(hideError, 7000);
    }

    function hideSucses () {
        $('.messageSuccess').fadeOut();
    }

    // Cкролл к форме
    $('.js-scrollTop').click(function () {
        var destination = $('.form').offset().top;
        $('html, body').animate({ scrollTop: destination }, 1100);
    });

    // Всплывающие волокна
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
