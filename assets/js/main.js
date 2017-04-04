//[nav] content
var navContent = '<div id="nav"> <span class="toggle"><h1>Anneの手工烘焙屋</h1><icon class="fa fa-bars" aria-hidden="true"></icon></span> <ul> <li> <a href="#welcome" class="scrolly"> <icon class="fa fa-home"></icon> </a> </li><li><a href="#intro" class="scrolly">理念與堅持</a></li><li><a href="#product" class="scrolly">產品</a> <ul class="product"> <li> <a href="#breakfast" class="scrolly"><img src="/assets/css/images/bar/breakfast.svg" alt=""><span>早餐</span></a> </li><li> <a href="#snake" class="scrolly"><img src="/assets/css/images/bar/snake.svg" alt=""><span>點心</span></a> </li><li> <a href="#season" class="scrolly"><img src="/assets/css/images/bar/season.svg" alt=""><span>季節限定</span></a> </li><li> <a href="#gift" class="scrolly"><img src="/assets/css/images/bar/gift.svg" alt=""><span>送禮</span></a> </li><li> <a href="#office" class="scrolly"><img src="/assets/css/images/bar/office.svg" alt=""><span>公司團購</span></a> </li></ul> </li><li><a href="#" class="scrolly">人氣夯品</a></li><li><a href="https://facebook.com/AnneKitchen0955162436/">臉書粉絲專頁</a></li></ul></div>'
var bar = document.getElementById('bar')
bar.innerHTML = navContent;
//[footer] content
var footerContent = '<ul class="icons"> <li><a href="https://www.facebook.com/AnneKitchen0955162436" class="icon fa fa-facebook"><span class="label">Facebook</span></a></li><li><a href="tel:0966615716" class="icon fa fa-phone"><span class="label">Phone</span></a></li><li><a href="http://line.me/ti/p/sQ2NN_QVS6" class="icon fa fa-commenting"><span class="label">Line</span></a></li><li><a href="https://www.instagram.com/annewu1971/" class="icon fa fa-instagram"><span class="label"></span></a></li><li><a href="mailto:annewu1971@gmail.com" class="icon fa fa-instagram"><span class="label">Email</span></a></li></ul><ul class="copyright"> <li>&copy; 2017 Anneの手工烘焙屋 | All Right Reserved.</li><li> Design: <a href="https://aries0d0f.com.tw">Aries Cs</a></li></ul>';
var footer = document.getElementById('footer');
footer.innerHTML = footerContent;

$(function () {
    //scroll down
    $(".scrolly").bind('click', function (event) {
        event.preventDefault(); //先取消超連結原本預設動作
        var $anchor = $(this);
        $('html,body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuint');
    });
});

toggle = () => {
    $(".toggle").click(function () {
        $(this).toggleClass("active");
        $(".nav").slideToggle();
        $("#nav").toggleClass("active");
    });
}

bar = (height, scrollHeight) => {
    var barStyle = ['home', 'intro', 'product', 'hot'];
    var introHeight = $("#intro").height() - 1;
    var productHeight = $("#product").height() - 1;
    console.log(scrollHeight, height, introHeight / height);
    if (((scrollHeight / height) >= 0) && ((scrollHeight / height) < 1)) {
        $("#nav").addClass(barStyle[0]);
    } else {
        $("#nav").removeClass(barStyle[0]);
    }
    if (((scrollHeight / height) >= 1) && ((scrollHeight / height) < (introHeight / height) + 1)) {
        $("#nav").addClass(barStyle[1]);
    } else {
        $("#nav").removeClass(barStyle[1]);
    }
    if (((scrollHeight / height) >= (introHeight / height) + 1) && ((scrollHeight / height) < ((introHeight + productHeight) / height) + 1)) {
        $("#nav").addClass(barStyle[2]);
    } else {
        $("#nav").removeClass(barStyle[2]);
    }

};

$(function () {
    var scrollHeight = scrollHeight = document.body.scrollTop | document.documentElement.scrollTop;
    var height = document.body.clientHeight | document.documentElement.clientHeight;
    var width = document.body.clientWidth | document.documentElement.clientWidth;
    bar(height, scrollHeight);

    toggle();
    img2bg();
    $(document).scroll(function () {
        scrollHeight = document.body.scrollTop | document.documentElement.scrollTop;
        bar(height, scrollHeight);
    });
})

function img2bg() {
    var items = jQuery('.bg');
    var patchs = jQuery('.bg>.image');
    for (var i = 0; i < items.length; ++i) {
        $(patchs[i]).css('background-image', 'url(' + $(items[i]).find('img').attr('src') + ')');
    };
}