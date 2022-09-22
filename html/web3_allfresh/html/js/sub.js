$(function () {
    var pNum;
    var divNum;
    var szNum;
    $(window).on('scroll', function () {
        var scNum;
        scNum = $(window).scrollTop()
        pNum = scNum/1000
        $('.submain>p').css({
            'opacity': 1 - pNum
        })
        
        divNum = scNum/250
        $('.submain>div').css({
            'opacity': 1 - divNum
        })
        
        
        szNum = scNum/3000 + 1
        $('.submain>p').css({
            'transform': 'scale(' + szNum + ')'
        })

    })

})
