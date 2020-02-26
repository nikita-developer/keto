
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

    var clock;
    var clock2;

    clock = $('.js-timerOne').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        countdown: true,
        language: 'ru'
    });

    clock2 = $('.js-timerTwo').FlipClock({
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
    clock.setCountdown(true);     //Устанавливаем отсчет назад
    clock.start();                //Запускаем отсчет
    clock2.setTime($result);      //Устанавливаем нужное время в секундах
    clock2.setCountdown(true);   //Устанавливаем отсчет назад
    clock2.start();              //Запускаем отсчет

    $('.js-openPopap').click(function () {
        $('.js-popap').fadeIn();
        $('body, html').addClass('hide_body');
    })

    $('.section__close').click(function () {
        $('.js-popap').fadeOut();
        $('body, html').removeClass('hide_body');
    })


    $(document).mouseup(function (e){
		var div = $('.js-popap .container');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('body, html').removeClass('hide_body');
			$('.js-popap').fadeOut();
		}
	});

    $('.purchase__btn').click(function (){
        $('.purchase__btn').text('SELECTED PACKAGE!');
        $('.purchase__item').removeClass('purchase__item_active');
        $(this).text('SELECTED!').parents('.purchase__item').addClass('purchase__item_active');
        var price = $(this).prev().text();
        $('.js-price').text(price);
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

    $(".form").submit(function () {
        var formID = $(this);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formID.serialize(),
            success: function () {
                showSucses ()
            },
            error: function () {
                showError()
            }
        });
        return false;
    });

    function showError () {
        $('.messageError').fadeIn();
        setTimeout(hideError, 3000);
    }

    function hideError () {
        $('.messageError').fadeOut();
    }

    function showSucses () {
        $('.messageSuccess').fadeIn();
        setTimeout(hideError, 3000);
    }

    function hideSucses () {
        $('.messageSuccess').fadeOut();
    }

    $('.form__field').on("blur", function(){
        if($('.form').valid()) {
            $('.form__btn').removeAttr("disabled");
        }
    });
});
