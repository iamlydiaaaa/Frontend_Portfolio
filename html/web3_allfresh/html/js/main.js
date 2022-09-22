$(function () {
    var winWidth;
    $(window).on('load',function(){
        winWidth = $(window).width()
    })
    $(window).on('resize',function(){
        winWidth = $(window).width()
        han()
    })
    
    $('#gnb>ul>li').on('mouseenter', function () {
        $('#gnb>ul ul').stop().hide()
        $(this).find('ul').stop().show()
        //        $('#gnb>ul ul:after').stop().show()
    })
    $('#gnb>ul>li').on('mouseleave', function () {
        $('#gnb>ul ul').stop().hide()
        //        $('#gnb>ul ul:after').stop().hide()
    })

    $('#gnb>ul ul').on('mouseenter', function () {
        $(this).siblings().css({
            'color': '#999'
        })
    })
    $('#gnb>ul ul').on('mouseleave', function () {
        $(this).siblings().css({
            'color': '#fff'
        })
    })
    
    $(window).on('scroll', function () {
        han()
        
        var scNum = $(window).scrollTop()
        if (scNum < 300) {
            $('.quick-menu').css({
                'right': '-100px'
            })
        } else if (scNum >= 300) {
            $('.quick-menu').css({
                'right': '10px'
            })
        }
        if (scNum > 270) {
            $('.pro-wrap>img').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            })
        }
        if (scNum > 470) {
            $('.product .txt').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            })
        }
        if (scNum > 970) {
            $('.promotion .txt').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            })
        }
        if (scNum > 1670) {
            $('.story .txt').css({
                'opacity': '1',
                'transform': 'translateY(0)'
            })
        }
    })

    function han(){
        var scNum = $(window).scrollTop()
        if (scNum < 50) {
            if(winWidth>=1200){
                $('#header>div:nth-child(2)').css({
                    'top': '50px',
                    'height': '90px'
                })
            }else if(winWidth<1200){
                $('#header>div:nth-child(2)').css({
                    'top': '50px',
                    'height': '60px'
                })      
            }
            $('.top-menu').css({
                'top': '0',
                'opacity': '1'
            })
            $('#header>div:nth-child(1)').css({
                'top': '0',
                'opacity': '1'
            })
        } else if (scNum >= 50) {
            $('#header>div:nth-child(2)').css({
                'top': '0',
                'height': '60px'
            })
            $('.top-menu').css({
                'top': '-80px',
                'opacity': '0'
            })
            $('#header>div:nth-child(1)').css({
                'top': '-50px',
                'opacity': '0'
            })
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
//        var widNum;
//        widNum = $(window).width()
//    $(window).on('resize', function() {
//        if (widNum < 1200){
//            $(window).on('scroll'), function(){
//                var scNum;
//                scNum = $(window).scrollTop()
//                if (scNum < 50){
//                    $('#header>div:nth-child(2)').css({
//                        'height': '60px'
//                    })
//                    $('.header-bottom').css({
//                        'height': '60px'
//                    })
//                } else if (scNum >= 50){
//                    $('#header>div:nth-child(2)').css({
//                        'height': '60px'
//                    })
//                    $('.header-bottom').css({
//                        'height': '60px'
//                    })
//                } 
//            }
//        }
//    })
    
    $('.cat').on('click', function () {
        $('.tap').css({
            'display': 'none'
        })
        $('.aside-category').css({
            'display': 'block'
        })
        $('.aside-menu-tap>li').removeClass('on')
        $(this).addClass('on')
    })
    $('.cus').on('click', function () {
        $('.tap').css({
            'display': 'none'
        })
        $('.aside-customer').css({
            'display': 'block'
        })
        $('.aside-menu-tap>li').removeClass('on')
        $(this).addClass('on')
    })

    $('.aside-btn').on('click', function () {
        $('.aside-wrap').css({
            'left': 0
        })
    })
    $('.aside-close').on('click', function () {
        $('.aside-wrap').css({
            'left': -350
        })
    })
    


})
