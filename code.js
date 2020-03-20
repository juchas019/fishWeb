$(document).on('scroll', function () {
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();

    const $sec1 = $('.sec1');
    const $sec2 = $('.sec2');
    const $sec3 = $('.sec3');
    const $sec4 = $('.sec4');

    const sec1FromTop = $sec1.offset().top
    const sec2Height = $sec1.outerHeight();
    const $sec1Text = $('.sec1 ul');

    const sec2FromTop = $sec2.offset().top
    const sec3Height = $sec2.outerHeight();
    const $sec2Text = $('.sec2 ul');

    const sec3FromTop = $sec3.offset().top
    const sec4Height = $sec4.outerHeight();
    const $sec3Text = $('.sec3 ul');

    const sec4FromTop = $sec4.offset().top
    const sec5Height = $sec4.outerHeight();
    const $sec4Text = $('.miejscowki-section');

    if (scrollValue > sec1FromTop + sec2Height / 1.2 - windowHeight) {
        $sec1Text.addClass('active');
    }
    if (scrollValue > sec2FromTop + sec3Height / 1.2 - windowHeight) {
        $sec2Text.addClass('active');
    }
    if (scrollValue > sec3FromTop + sec4Height / 2 - windowHeight) {
        $sec3Text.addClass('active');
    }
    if (scrollValue > sec4FromTop + sec4Height / 2 - windowHeight) {
        $sec4Text.addClass('active');
            }

    if (scrollValue < 100) {
        $('section ul').removeClass('active')
        $('.sec3').removeClass('active')
        $('.miejscowki-section').removeClass('active')
    }
})