// tel country init
var telInputCountry = document.querySelector('.tel-input-country-init');

if ($('.tel-input-country-init').length > 0) {
    window.intlTelInput(telInputCountry, {
        initialCountry: 'auto'
    });
}

$(document).ready(function() {
    // popup init
    $('.js-modal-init').click(function (e) {
        var modalIn = $(this).attr('href');
        $('body').addClass('is-modal-opened');
        $(modalIn).addClass('is-show');
        e.preventDefault();
    });

    $('.js-modal-close').on('click', function (e) {
        $('body').removeClass('is-modal-opened');
        $(this).parents('.hipewgt-91').removeClass('is-show');
        e.preventDefault();
    });
});