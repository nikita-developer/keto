
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
    clock.setCountdown(true);   //Устанавливаем отсчет назад
    clock.start();              //Запускаем отсчет
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
    })

    // $('.form').change(function() {
    //     if($('input.form__field').map(function(index, domElement) {
    //         if ($(domElement).val() !== "")
    //             return domElement;
    //     }).length < 7) {
    //         $("input[type='submit']").attr('disabled', 'disabled');
    //     } else {
    //         $("input[type='submit']").removeAttr('disabled');
    //     }
    // });

    $('.form').each(function(){
        var form = $(this),
            btn = form.find('.form__btn');

        // Функция проверки полей формы
        function checkInput() {
            form.find('.form__field').each(function() {
                if($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $("input[type='submit']").removeAttr('disabled');
                } else {
                    // Если поле пустое добавляем класс-указание
                    $("input[type='submit']").attr('disabled', 'disabled');
                }
            });
        }
        setInterval(function(){
            checkInput();
        },500);
    });
});
