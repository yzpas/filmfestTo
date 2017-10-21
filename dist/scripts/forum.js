$(function(){
    $(".forum_Ul li").click(function(){
        $(this).addClass("froum_select").siblings().removeClass("froum_select");
        $(".rfBox .forum_rf").removeClass("displayB").eq($('.forum_Ul li').index(this)).addClass("displayB")
    })
});