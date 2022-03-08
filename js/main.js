$(function() {

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar-collapse.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });

    $('.product-category-item button').click(function() {
        $(this).parent().find('.child-category').slideToggle();
        $(this).toggleClass('active');
    });

//Hiệu ứng load
    // $('body').addClass('preloading');
    // $(window).load(function() {
    // $('body').removeClass('preloading');
    // $('#preload').delay(500).fadeOut();
    // });


    $('.main-menu li').click(function(e) {
        e.preventDefault();
        $('.main-menu li').removeClass('active');
        $(this).addClass('active');
    });

    $('.dropdown').click(function() {
        $('#mega-menu').fadeToggle(600);
        $('.overlay-mobile').toggleClass('active');
    });

    $('.overlay-mobile').click(function() {
        $('.overlay-mobile').removeClass('active');
        $('#mega-menu').fadeOut();
    });

    $('.navbar-toggler').click(function() {
        $('.navbar.mobile').addClass('active');
        $('.overlay-mobile').addClass('show');
    });

    $('.overlay-mobile').click(function() {
        $('.navbar.mobile').removeClass('active');
        $('.overlay-mobile').removeClass('show');
    });

    $('.star.selected a').click(function(e) {
        e.preventDefault();

        $('.star.selected a').removeClass('active');
        $(this).addClass('active');

    });


    //menu mobile
    $('.btn-dropmenu').click(function(event) {
        event.preventDefault();
        $(this).parent().find('ul:first').slideToggle();
        $(this).find('i').toggleClass('rotate');
    });


    $('.menu-item-mega .btn-dropmenu').click(function(event) {
        event.preventDefault();

        var parent = $(this).parent();
        parent.parent().find('ul:first').slideToggle();

    });

    $('.view .list').click(function(e) {
        e.preventDefault();
        $('.products-wrapper-list').addClass('list');
    });

    $('.view .grid').click(function(e) {
        e.preventDefault();
        $('.products-wrapper-list').removeClass('list');
    });


    //Slider
    var swiper = new Swiper(".banner-slider__container", {
        cssMode: true,
        lopp: true,
        navigation: {
            nextEl: ".swiper-button-next.slider-next",
            prevEl: ".swiper-button-prev.slider-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        keyboard: true,
    });

    //Sản phẩm nổi bật
    var swiper = new Swiper('.swiper-container-multirow', {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.multirow',
            prevEl: '.swiper-button-prev.multirow',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });


    //Product
    var swiper = new Swiper(".product-1", {

        slidesPerView: 4,
        spaceBetween: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.product-1",
            prevEl: ".swiper-button-prev.product-1",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

   var swiper = new Swiper(".product-2", {

        slidesPerView: 4,
        spaceBetween: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.product-2",
            prevEl: ".swiper-button-prev.product-2",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

   var swiper = new Swiper(".product-3", {

        slidesPerView: 4,
        spaceBetween: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.product-3",
            prevEl: ".swiper-button-prev.product-3",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

   var swiper = new Swiper(".product-4", {

        slidesPerView: 4,
        spaceBetween: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.product-4",
            prevEl: ".swiper-button-prev.product-4",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });


    //Project
    var swiper = new Swiper(".project", {

        slidesPerView: 3,
        spaceBetween: 30,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.project",
            prevEl: ".swiper-button-prev.project",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    //related projects
    var swiper = new Swiper(".related-projects", {

        slidesPerView: 3,
        spaceBetween: 30,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: false,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        loopFillGroupWithBlank: true,

        navigation: {
            nextEl: ".swiper-button-next.related-projects",
            prevEl: ".swiper-button-prev.related-projects",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    //news list
    var swiper = new Swiper(".news-list", {

        slidesPerView: 4,
        spaceBetween: 30,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.news-list-next",
            prevEl: ".swiper-button-prev.news-list-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });


   //customer-partner
    var swiper = new Swiper(".customer-partner", {

        slidesPerView: 5,
        spaceBetween: 20,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.customer-partner-next",
            prevEl: ".swiper-button-prev.customer-partner-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    //Product list
    var swiper = new Swiper(".product-list", {

        slidesPerView: 4,
        spaceBetween: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next.product-list-next",
            prevEl: ".swiper-button-prev.product-list-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    // Slide prduct gallery
    var swiper = new Swiper(".gallery-2", {
        speed: 1000,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next.gallery",
            prevEl: ".swiper-button-prev.gallery2",
        }
    });
    var swiper2 = new Swiper(".gallery-1", {
        loop: true,
        speed: 1000,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });


    //nút tăng giảm Số lượng sản phẩm
    // $('input.input-qty').each(function() {

    //     var $this = $(this);
    //     qty = $this.parent().find('.is-form');
    //     min = Number($this.attr('min'));
    //     max = Number($this.attr('max'));
    //     if (min == 0) {
    //         var d = 0;
    //     } else
    //         d = min;
    //     $(qty).on('click', function() {
    //         if ($(this).hasClass('minus')) {
    //             if (d > min) d += -1;
    //         } else if ($(this).hasClass('plus')) {
    //             var x = Number($this.val()) + 1;
    //             if (x <= max) d += 1;
    //         }
    //         $this.attr('value', d).val(d);
    //     });
    // });
});