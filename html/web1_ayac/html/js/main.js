$(function(){
    $('#gnb').on('mouseenter',function(){
        $('#gnb>ul>li>ul').stop().slideDown(200)
        $('.gnb-bg').stop().slideDown(200)

        $('#header').stop().css({
            'background-color':'#fff'
        })
        $('#gnb>ul>li>a').stop().css({
            'color':'#333'
        })
        $('.tnb a').stop().css({
            'color':'#999'
        })
        $('.logo').stop().css({
            'background':'url(../img/logo-b.png)'
        })
        $('.megamenu>p>a').stop().css({
            'background-image':'url(../img/megamenu-icon-b.png)'
        })
        $('.search-wrap>p>a').stop().css({
            'background-image':'url(../img/sch_icon-b.png)'
        })
    })
    $('#gnb').on('mouseleave',function(){
        $('#gnb>ul>li>ul').stop().slideUp(200)
        $('.gnb-bg').stop().slideUp(200)
        
        $('#header').stop().css({
            'background-color':'transparent'
        })
        $('#gnb>ul>li>a').stop().css({
            'color':'#fff'
        })
        $('.tnb a').stop().css({
            'color':'#fff'
        })
        $('.logo').stop().css({
            'background':'url(../img/logo.png)'
        })
        $('.megamenu>p>a').stop().css({
            'background-image':'url(../img/megamenu-icon.png)'
        })
        $('.search-wrap>p>a').stop().css({
            'background-image':'url(../img/sch_icon.png)'
        })
    })

    
    $('#gnb>ul>li').on('mouseenter',function(){
        $(this).find('dl').stop().slideDown(200)
    })
    $('#gnb>ul>li').on('mouseleave',function(){
        $(this).find('dl').stop().slideUp(200)
    })
    
    
    
    $('.inner>a').on('click',function(){
        $('#search').stop().slideUp(200)
        
        $('#header').stop().css({
            'background-color':'transparent'
        })
        $('#gnb>ul>li>a').stop().css({
            'color':'#fff'
        })
        $('.tnb a').stop().css({
            'color':'#fff'
        })
        $('.logo').stop().css({
            'background':'url(../img/logo.png)'
        })
        $('.megamenu>p>a').stop().css({
            'background-image':'url(../img/megamenu-icon.png)'
        })
        $('.search-wrap>p>a').stop().css({
            'background-image':'url(../img/sch_icon.png)'
        })
    })
    $('.search-wrap>p>a').on('click',function(){
        $('#search').stop().slideDown(200)
        
        $('#header').stop().css({
            'background-color':'#fff'
        })
        $('#gnb>ul>li>a').stop().css({
            'color':'#333'
        })
        $('.tnb a').stop().css({
            'color':'#999'
        })
        $('.logo').stop().css({
            'background':'url(../img/logo-b.png)'
        })
        $('.megamenu>p>a').stop().css({
            'background-image':'url(../img/megamenu-icon-b.png)'
        })
        $('.search-wrap>p>a').stop().css({
            'background-image':'url(../img/sch_icon-b.png)'
        })
    })
    
    
    
    
    $('.megamenu-form>a').on('click',function(){
        $('.megamenu-form').stop().hide(200)
    })
    $('.megamenu>p>a').on('click',function(){
        $('.megamenu-form').stop().show(200)
    })
})