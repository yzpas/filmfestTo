/**
 * Created by Administrator on 2017/8/22.
 */
//    短信倒计时60秒
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.innerHTML="获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.innerHTML="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}
$(function(){
    $(".ti_ul").hover(function(){
        $(".login").css({"z-index":"0"});
        $(".ti_ulTo").stop().animate({
            "opacity":"1",
            "Zindex":"102"
        },200);
        $(".nav_back").stop().animate({
            "opacity":"1",
            "Zindex":"101"
        },200);
        $(".title").removeClass("overflow");
    },function(){
        $(".login").css({"z-index":"100"});
        $(".ti_ulTo").stop().animate({
            "opacity":"0",
            "Zindex":"10"
        },200);
        $(".nav_back").stop().animate({
            "opacity":"0",
            "Zindex":"10"
        },200);
        $(".title").addClass("overflow")

    });
    //首页
    $(".news_ul_To li").hover(function(){
        $(this).find(".popu").stop().animate({
            "opacity":"0"
        },200);
    },function(){
        $(this).find(".popu").stop().animate({
            "opacity":"1"
        },200);
    });

    $(".wxa").hover(function(){
        $(".pup").stop().animate({
            "opacity":"1"
        },200);
        $(this).removeClass("overflow");
    },function(){
        $(".pup").stop().animate({
            "opacity":"0"
        },200);
        $(this).addClass("overflow")
    });
    /*检测滚动显示返回按钮*/
    $(window).scroll(function() {
        if ($(document).scrollTop()>0){
            $(".Img1").fadeIn("slow");
        }else{
            $(".Img1").fadeOut("slow");
        }
    });
    /*点击返回按钮*/
    $(".Img1").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

//    嘉宾注册页面下一步
    $(".oneBtn").click(function () {
        $(this).parent(".lo_dv").addClass("displayNo").siblings().removeClass("displayNo");
        $(".login").removeClass("H338");
        $(".lo_ul").removeClass("H260");

    });
    $(".Goup").click(function(){
        $(this).parent(".lo_dv").addClass("displayNo").siblings().removeClass("displayNo");
        $(".login").addClass("H338");
        $(".lo_ul").addClass("H260");
    })
});