let winHeight = window.innerHeight;
$('header').css({
    'height': winHeight + 'px'
})

// header里轮播
let sliderNum = 0;
setInterval(() => {
    sliderNum++;
    if (sliderNum > $('.slider').length - 1) {
        sliderNum = 0;
    }
    $('.slider').css({
        'left': - sliderNum * 100 + '%'
    })
}, 3000);

// 底部logo轮播
let itemNum = 0;
setInterval(() => {
    itemNum++;
    if (itemNum > $('.shade .content').children().length - 1) {
        itemNum = 0;
    }
    $('.shade .content').css({
        'left': - itemNum * 190 + 'px'
    })
}, 5000);


// 鼠标悬停方块切换
// who-we-are 处
for (let x = 0; x < $('.we-card-content').length; x++) {

    $('.we-card-content').eq(x).on('mouseover', () => {
        $('.we-card-content .pro').eq(x).css({
            'opacity': 0
        })
        $('.we-card-content .show').eq(x).css({
            'top': 0
        })
    })

    $('.we-card-content').eq(x).on('mouseout', () => {
        $('.we-card-content .pro').eq(x).css({
            'opacity': 1
        })
        $('.we-card-content .show').eq(x).css({
            'top': '100%'
        })
    })
}
// meet-the-team 处
for (let x = 0; x < $('.team-card-content').length; x++) {

    $('.team-card-content').eq(x).on('mouseover', () => {
        $('.team-card-content .tc-pro img').eq(x).css({
            'top': '-100px'
        })
        $('.team-card-content .tc-show').eq(x).css({
            'top': 0
        })
    })

    $('.team-card-content').eq(x).on('mouseout', () => {
        $('.team-card-content .tc-pro img').eq(x).css({
            'top': 0
        })
        $('.team-card-content .tc-show').eq(x).css({
            'top': '100%'
        })
    })
}
// out-works处
for (let x = 0; x < $('.portfolio-card').length; x++) {

    $('.portfolio-card').eq(x).on('mouseover', () => {
        $('.portfolio-card .show').eq(x).css({
            'top': 0,
            'opacity': 1
        })
    })

    $('.portfolio-card').eq(x).on('mouseout', () => {
        $('.portfolio-card .show').eq(x).css({
            'top': '50%',
            'opacity': 0
        })
    })
}


// CUSTOMER SAYS背景滚动墙
let saysmove = 0;
setInterval(() => {
    saysmove--;
    $('#says').css({ 'background-position': saysmove + 'px' })
}, 50);


function widthChange() {
    if (window.innerWidth >= 992) {
        $('.character').css({
            'font-size': '7.2rem'
        })
    }

    if (window.innerWidth < 992) {
        $('#works pic').hide()
        $('.change').removeClass('container-fluid').addClass('container')
        $('.character').css({
            'font-size': '5rem'
        })
    }

    if (window.innerWidth >= 768) {
        $('header .top').css({
            'background': 'none',
            // 'padding-bottom':'20px'
        })
    }

    if (window.innerWidth < 768) {
        $('.character').css({
            'font-size': '3.2rem'
        })
        $('header .top').css({
            'background': '#000',
            // 'padding-bottom':'20px'
        })
    }

    if (window.innerWidth < 450) {
        $('.character').css({
            'font-size': '2.6rem'
        })
    }
}

widthChange();

// 监听宽度变化
window.onresize = function () {
    widthChange()
}


var beforeScrollTop = 0;
var afterScrollTop = 0;

// 监听滚动事件
window.addEventListener('scroll', () => {
    var scrollTop = $(document).scrollTop();

    // 导航条样式
    if (scrollTop >= ($('#who-we-are')[0].offsetTop - 200)) {
        // 增加背景色
        $('#top').css({
            'padding-top': '0px',
            'background': 'rgba(255,255,255,0.9)',
            'border-bottom': '1px solid #eee'
        })
        // 文字变成黑色
        $('.navbar-right li a').css({
            'color': '#000',
            'line-height': '40px'
        })
        // 更换logo
        $('.navbar-header .logo img')[0].setAttribute('src', './img/logo-2.png')
        $('.navbar-header .logo img').css({ 'height': '30px' })
        $('.navbar-header .logo img').css({ 'line-height': '100px' })
        $('.navbar').css({ 'line-height': '70px' })
        $("#to-top").css({
            'opacity': 1,
            'visibility': 'visible'
        })
    } else {
        $('#top').css({
            'padding-top': '30px',
            'background': 'none',
            'border-bottom': 'none'
        })
        $('.navbar-right li a').css({ 'color': '#fff' })
        $('.navbar-right li a').eq(0).css({ 'color': '#ffa200' })
        $('.navbar-header .logo img')[0].setAttribute('src', './img/logo.png')
        $('.navbar-header .logo img').css({ 'height': '100%' })
        $("#to-top").css({
            'opacity': 0,
            'visibility': 'hidden'
        })
    }

    beforeScrollTop = afterScrollTop;
    afterScrollTop = scrollTop;

    // 滚动条往下移动
    if (beforeScrollTop < afterScrollTop) {
        $('header').css({
            'background-position': '50% -' + scrollTop / 5 + 'px'
        })

        if (scrollTop > ($('#facts')[0].offsetTop - 1400)) {
            $('#facts').css({
                'background-position': '50% -' + (scrollTop - ($('#facts')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        if (scrollTop > ($('#skill')[0].offsetTop - 1400)) {
            $('#skill').css({
                'background-position': '50% -' + (scrollTop - ($('#skill')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        if (scrollTop > ($('#us')[0].offsetTop - 1400)) {
            $('#us').css({
                'background-position': '50% -' + (scrollTop - ($('#us')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        // header middle的滚动变化
        if (scrollTop >= 400) {
            $('#middle').css({
                'opacity': 0
            })
        } else if (scrollTop >= 300) {
            $('#middle').css({
                'opacity': 0.25
            })
        } else if (scrollTop >= 200) {
            $('#middle').css({
                'opacity': 0.5
            })
        } else if (scrollTop >= 100) {
            $('#middle').css({
                'opacity': 0.75
            })
        }

    }

    // 滚动条往上移动
    if (beforeScrollTop > afterScrollTop) {
        $('header').css({
            'background-position': '50% -' + scrollTop / 5 + 'px'
        })

        if (scrollTop > ($('#facts')[0].offsetTop - 1400)) {
            $('#facts').css({
                'background-position': '50% -' + (scrollTop - ($('#facts')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        if (scrollTop > ($('#skill')[0].offsetTop - 1400)) {
            $('#skill').css({
                'background-position': '50% -' + (scrollTop - ($('#skill')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        if (scrollTop > ($('#us')[0].offsetTop - 1400)) {
            $('#us').css({
                'background-position': '50% -' + (scrollTop - ($('#us')[0].offsetTop - 1400)) / 5 + 'px'
            })
        }

        // header middle的滚动变化
        if (scrollTop <= 100) {
            $('#middle').css({
                'opacity': 1
            })
        } else if (scrollTop <= 200) {
            $('#middle').css({
                'opacity': 0.75
            })
        } else if (scrollTop <= 300) {
            $('#middle').css({
                'opacity': 0.5
            })
        } else if (scrollTop <= 400) {
            $('#middle').css({
                'opacity': 0.25
            })
        } else if (scrollTop <= 500) {
            $('#middle').css({
                'opacity': 0
            })
        }
    }

    // 导航条文字变色
    if (scrollTop > ($('#who-we-are')[0].offsetTop - 200)) {
        remove()
        add(1)
    }
    if (scrollTop > ($('#team')[0].offsetTop - 200)) {
        remove()
        add(2)
    }
    if (scrollTop > ($('#services')[0].offsetTop - 200)) {
        remove()
        add(3)
    }
    if (scrollTop > ($('#portfolio')[0].offsetTop - 200)) {
        remove()
        add(4)
    }
    if (scrollTop > ($('#says')[0].offsetTop - 200)) {
        remove()
        add(5)
    }
    if (scrollTop > ($('#news')[0].offsetTop - 200)) {
        remove()
        add(6)
    }
    if (scrollTop > ($('#us')[0].offsetTop - 200)) {
        remove()
        add(7)
    }
})

function remove() {
    for (let i = 0; i < $('.navbar-right').children().length; i++) {
        $('.navbar-right').children().eq(i).children().eq(0).css({ 'color': '#000' })
    }
}

function add(index) {
    $('.navbar-right').children().eq(index).children().eq(0).css({ 'color': '#ffa200' })
}


function scrollGoTo(distance) {
    $('html,body').animate({ scrollTop: distance }, 1000);
}

// 右下角跳转到顶部按钮
$("#to-top").on('click', function () {
    scrollGoTo(0)
})

// 导航条应该跳转的位置存储到数组
var arr = [0, $('#who-we-are')[0].offsetTop, $('#team')[0].offsetTop, $('#services')[0].offsetTop, $('#portfolio')[0].offsetTop, $('#says')[0].offsetTop, $('#news')[0].offsetTop, $('#us')[0].offsetTop]
// 绑定点击事件
for (let i = 0; i < $('.navbar-right').children().length; i++) {
    $('.navbar-right').children().eq(i).children().on('click', function () {
        scrollGoTo(arr[i])
    })
}

