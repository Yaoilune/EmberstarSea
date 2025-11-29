$(function () {



    // 角色小图轮播
    var swiper_small = new Swiper(".page-resonators .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
    });

    $('.page-resonators .swiper-button-prev').click(function () {
        swiper_small.slidePrev();

    })
    $('.page-resonators .swiper-button-next').click(function () {
        swiper_small.slideNext();
    })

    // 角色大图轮播
    var swiper_big = new Swiper(".page-resonators .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
        navigation: {
            nextEl: '.page-resonators .swiper-button-next',
            prevEl: '.page-resonators .swiper-button-prev',
        },
    });





    // 情报页图片切换
    var swiper_img = new Swiper(".page-lore .swiper_img", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        watchSlidesProgress: true,
    });

    // 情报页文字切换
    var swiper_txt = new Swiper(".page-lore .swiper_txt", {
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_img,
        },
        navigation: {
            nextEl: '.page-lore .swiper-button-next',
            prevEl: '.page-lore .swiper-button-prev',
        },
    });



    // 世界小图轮播
    var world_small = new Swiper(".page-world .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
    });

    // 世界大图轮播
    var world_big = new Swiper(".page-world .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: world_small,
        },
    });
})




$(function () {
    // 选项卡切换功能
    $("ul.nav-tab>li>a").click(function (e) {
        e.preventDefault();
        let showid = $(this).attr("href");
        $(showid).siblings().removeClass("active");
        $(showid).addClass("active");
        $(this).parent("li").siblings().removeClass("active");
        $(this).parent("li").addClass("active");
    })

    // 轮播图
    var mySwiper1 = new Swiper('.index-news .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 800,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.index-news .swiper-pagination',
            clickable: true
        }
    });

    // 置顶按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#roll-top").fadeIn(400);
        } else {
            $("#roll-top").fadeOut(400)
        }
    });

    // 隐藏视频弹窗层
    $('.video-hidden').click(function () {
        $('.video-alert').removeClass('active')
        $('html').removeClass('active')
        $('.video-alert video')[0].pause();
    })

    // 显示视频弹窗层
    $('.video-show').click(function () {
        $('.video-alert').addClass('active')
        $('html').addClass('active')
        $('.video-alert video')[0].play();
    })

    // 角色页面-背景变化（这段可以保持不动）
let bgNum = $('.page-character .character-bg img').length;
let startNum = 0
setInterval(function () {
    $('.page-character .character-bg img').removeClass('active');
    $('.page-character .character-bg img').eq(startNum).addClass('active');
    startNum = (startNum + 1) % bgNum
}, 6000)

// ★ 只在有 .page-character 的页面，才初始化这套原神角色轮播
if ($('.page-character').length) {

    // 角色界面轮播图（原神那套）
    var swiper_small_character = new Swiper(".page-character .swiper_small", {
        loop: false,
        spaceBetween: 34,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper_big_character = new Swiper(".page-character .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".layer-bottom .swiper-button-next",
            prevEl: ".layer-bottom .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_small_character,
        },
    });
}


    // 背景音乐播放和关闭
    $('#header .header-left .bgm-btn').click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('#body-bgm')[0].play();
        } else {
            $('#body-bgm')[0].pause();
        }
        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#body-bgm')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })

    // 人声播放和暂停
    $('.page-character .swiper_big .voice').click(function () {
        let checkState = $(this).parents('.cv-left').siblings('label').children('input').prop('checked');
        let soundName = $(this).attr('soundname');
        if (checkState) {
            soundName = soundName + '-2.mp3'
        } else {
            soundName = soundName + '-1.mp3'
        }

        soundName = './sound/' + soundName

        $(this).toggleClass('active')
        $('#audio-voice').attr('src', soundName)

        if ($(this).hasClass("active")) {
            $('#audio-voice')[0].play();
        } else {
            $('#audio-voice')[0].pause();
        }

        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#audio-voice')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })

    // 切换cv名称
    $('.page-character .swiper_big label input').change(function () {
        if ($(this).prop('checked')) {
            $(this).parent('label').siblings('.cv-left').children('.cv-name').addClass('active')
        } else {
            $(this).parent('label').siblings('.cv-left').children('.cv-name').removeClass('active')
        }
    })

    // 暂停语音
    $('.close-voice').click(function () {
        $('.page-character .swiper_big .voice').removeClass('active')
        $('#audio-voice')[0].pause();
        $('#audio-voice').attr('src', '')
    })

    // 赛事界面轮播图
    var gameSwiper = new Swiper('.game-sec1 .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 800,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.game-sec1 .swiper-pagination',
            clickable: true
        }
    });

})