// Земи листа и поединечни елементи
var tochkiElementi = $(".tochki li");
var prvaTochka = $(tochkiElementi).first();
var poslednaTochka = $(tochkiElementi).last();
var tochkaLocationHash = window.location.hash;
var tochkaLocationId = tochkaLocationHash.substring(1);
var idRandomTochka = getRandomInt(0, 49); // Земи вредност од 0 до 49 по случаен избор

// Овозможи прикажување на точките според вредноста на хеш во URL
$(window).on('hashchange', function () {
    // Скриј ги сите точки
    tochkiElementi.hide();

    // Прикажи ја точката што е посочена преку хеш
    tochkiElementi.eq(document.location.hash.substring(1)).show();
});

$(document).ready(function () {

    // Прикажи предупредување на постари верзии на Internet Explorer
    if (navigator.userAgent.match(/msie (5|6|7)\./i)) {
        alert("Користите прастара верзија на Internet Explorer која овој веб-сајт не ја поддржува. Иако можеби ќе можете да го прегледувате сајтот, нешто сигурно нема да работи како што е предвидено.");
    }

    // Прикажи ја соодветната точка зависно од тоа кој број е внесен во хеш
    if (tochkaLocationId.length !== 0) {

        // Скриј ги сите точки
        tochkiElementi.hide();

        tochkiElementi.eq(tochkaLocationId).show();
    }
    else {
        // Провери дали вредноста е 21 и намалија за еден помалку
        if (idRandomTochka === 21) {
            idRandomTochka--;
        }

        // Прикажи точка по случаен избор
        $(tochkiElementi).eq(idRandomTochka).show();

        // Додај го редниот број на прикажаната точка на URL
        document.location.hash = "#" + tochkiElementi.filter(':visible').index();
    }

    // Премини на следната точка на клик на копче
    $(".btn-next").click(function () {
        // Провери која точка е видлива
        var vidlivaTochka = tochkiElementi.filter(':visible');
        var slednaTochka = $(vidlivaTochka).next(tochkiElementi);

        // Скриј ги сите точки
        tochkiElementi.hide();

        // Прикажи ја следната или првата точка во листата
        if (slednaTochka.length === 0) {
            prvaTochka.show();
        } else {
            slednaTochka.show();
        }
    });

    // Премини на претходната точка на клик на копче
    $(".btn-prev").click(function () {
        // Провери која точка е видлива е видлива
        var vidlivaTochka = tochkiElementi.filter(':visible');
        var prethodnaTochka = $(vidlivaTochka).prev(tochkiElementi);

        // Скриј ги сите точки
        tochkiElementi.hide();

        // Прикажи ја претходната или последната точка во листата
        if (prethodnaTochka.length === 0) {
            poslednaTochka.show();
        } else {
            prethodnaTochka.show();
        }

    });

    $(".btn-next, .btn-prev").click(function () {

        // Постави хеш за видливата точка
        window.location.hash = "#" + tochkiElementi.filter(':visible').index();
    });

    // Додај поддршка за листање преку тастатура
    $(document).keydown(function (e) {
        if (e.which === 37) // лева стрелка
        {
            $(".btn-prev").click();
        }
        else if (e.which === 39) // десна стрелка
        {
            $(".btn-next").click();
        }
    });

});

// Вчитај Roboto Condensed од Google Fonts
WebFontConfig = {
    google: {families: ['Roboto+Condensed:400,400italic,700,700italic:cyrillic-ext,latin,cyrillic']}
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

// Генерирај рандом цел број помеѓу две зададени вредности - преку MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}