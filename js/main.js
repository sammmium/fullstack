$(document).ready(function() {
    let contentDefault = 'учебный курс fullstack web developer';
    let contentCatalog = 'каталог продукции';

    $('.content').html(contentDefault);

    $('a.menu-home').on('click', function() {
        $('.content').html(contentDefault);
    });

    $('a.menu-catalog').on('click', function() {
        $('.content').html(contentCatalog);
    });


});