$(function () {

    var num;
    var scrollNum;

    function gnbClick(e) {
        e.preventDefault();
        num = $(this).index()
        scrollNum = $('section').eq(num).offset().top
        $('html,body').stop().animate({
            scrollTop: scrollNum
        }, 1000)
    }

    $('#gnb li').on('click', gnbClick)
    $('.quick>li').on('click', gnbClick)
    
    $(window).on('scroll',function(){
        scrollNum = $('html,body').scrollTop();
        if(scrollNum<=1162){
            $('.quick li').removeClass();
            $('.quick li').eq(0).addClass('on')
        }else if(scrollNum>=1163 && scrollNum<2239 ){
            $('.quick li').removeClass();
            $('.quick li').eq(1).addClass('on'); 
        }else if(scrollNum>=2240 && scrollNum<3389 ){
            $('.quick li').removeClass();
            $('.quick li').eq(2).addClass('on')                        
        }else if(scrollNum>=3390 && scrollNum<7499 ){
            $('.quick li').removeClass();
            $('.quick li').eq(3).addClass('on')
        }else if(scrollNum>=7500 && scrollNum<8499 ){
            $('.quick li').removeClass();
            $('.quick li').eq(4).addClass('on')
        }else if(scrollNum>=8500 && scrollNum<9777 ){
            $('.quick li').removeClass();
            $('.quick li').eq(5).addClass('on')
        }else if(scrollNum>=9778){
            $('.quick li').removeClass();
            $('.quick li').eq(6).addClass('on')
            
            $('.contact dl').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            })
            $('.contact p').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            })
            $('.contact a').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            })
            $('.contact span').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            })
            
        }
    })
    
    var pNum;
    var divNum;
    $(window).on('scroll', function () {
        var scNum;
        scNum = $(window).scrollTop()
        $('.scroll').text(scNum)

        divNum = scNum / 800;
        $('#visual p').css({
            'opacity': 1 - divNum
        })
        $('.btn-scroll').css({
            'opacity': 1 - divNum
        })
        
        if (scNum > 700) {
            $('.profile-txt h1').css({
                'opacity': 1,
                'animation': 'fadeInRight 1.2s'
            })
            $('.profile-txt ul').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s'
            })
        }
        if (scNum < 1000) {
            $('.logo').css({
                'background-color': 'transparent',
                'left': '50px',
                'box-shadow': 'none',
            })
            $('.quick').css({
                'opacity': '0',
                'left': -120
            })
        } else if (scNum >= 1000) {
            $('.logo').css({
                'background-color': '#b0ccd6',
                'left': '-100px',
                'box-shadow': '5px 5px 20px rgba(0,0,0,0.2)',
 
            })
            $('.logo').on('mouseenter', function () {
                $(this).stop().css({
                    'left': '0'
                })
                $('.logo a').stop().css({
                    'text-shadow': '5px 5px 10px rgba(0,0,0,0.2)'
                })
            })
            $('.logo').on('mouseleave', function () {
                $(this).stop().css({
                    'left': '-100px'
                })
                $('.logo a').stop().css({
                    'text-shadow': 'none'
                })
            })
            $('.quick').css({
                'opacity': '1',
                'left': 20
            })
        }
        if (scNum > 1800) {
            $('.graphic article').css({
                'opacity': 1,
                'animation': 'fadeIn 2s ease'
            })
        }
        if (scNum > 3200) {
            $('.webdesign article').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s ease'
            })
        }
//        if (scNum > 3900) {
//            $('.web3').css({
//                'opacity': 1,
//                'animation': 'fadeInUp 1.5s ease'
//            })
//        }
//        if (scNum > 4600) {
//            $('.web1').css({
//                'opacity': 1,
//                'animation': 'fadeInUp 1.5s ease'
//            })
//        }
//        if (scNum > 5300) {
//            $('.web4').css({
//                'opacity': 1,
//                'animation': 'fadeInUp 1.5s ease'
//            })
//        }
//        if (scNum > 6000) {
//            $('.web5').css({
//                'opacity': 1,
//                'animation': 'fadeInUp 1.5s ease'
//            })
//        }
        if (scNum > 6900) {
            $('.transition article').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s ease'
            })
        }
        if (scNum > 7900) {
            $('.d-video').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s ease'
            })
        }
        if (scNum > 8200) {
            $('.d-respond').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s ease'
            })
        }
        if (scNum > 8500) {
            $('.d-time').css({
                'opacity': 1,
                'animation': 'fadeInUp 1.5s ease'
            })
        }
    })
    
    

})
