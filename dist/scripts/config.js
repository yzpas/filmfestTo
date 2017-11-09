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
    });

//    科幻单元 切换
    $(".forum_Ul .ulTos").click(function(){
        $(this).addClass("froum_select").siblings().removeClass("froum_select");
        $(".forum_Ul_ul1").attr("class", "forum_Ul_ul_li_selct");
        $(".forum_Ul_ul2").attr("class", "");

    });
    $(".forum_Ul .forum_Ul_li_to").click(function(){
        $(this).addClass("froum_select").siblings().removeClass("froum_select");
        $(".forum_Ul_ul li").eq(0).attr("class", "forum_Ul_ul1 ");
        $(".forum_Ul_ul li").eq(1).attr("class", "");
        $(".forum_Ul_ul li").eq(2).attr("class", "");
    });
    $(".forum_Ul_ul li").click(function(){
        $(this).addClass("forum_Ul_ul_li_selct").siblings().removeClass("forum_Ul_ul_li_selct");
        var indexa = $('.forum_Ul_ul li').index(this);
       // alert(indexa);
        if(indexa != 0){
            $(".rfBox1").hide();
            $(".rfBox2").show();
        }else{
            $(".rfBox1").show();
            $(".rfBox2").hide();
        }
            $(".rfBox2 .forum_rf2").removeClass("displayB").eq($('.forum_Ul_ul li').index(this)-1).addClass("displayB")

    });

    $(".forum_select_li li").click(function(){
        //var indexb = $('.forum_Ul  li').index(this);
        //alert(indexb);
         // alert($('.forum_select_li li').index(this));
        $(".rfBox1 .forum_rf1").removeClass("displayB").eq($('.forum_Ul  li').index(this)).addClass("displayB")
    });

//    创投路演 点击切换
    $(".performUlTo li").click(function(){
        var $index = $(this).index();
        $(this).addClass("liToselect").siblings().removeClass("liToselect");
        $(this).parent(".performUlTo").siblings().find("div").removeClass("displayB").eq($index).addClass("displayB")
    });
    $(".performUlTos li").click(function(){
        var $index = $(this).index();
        $(this).addClass("liToselect").siblings().removeClass("liToselect");
        $(this).parent(".performUlTos").siblings(".performUlTo_Main").find("div").removeClass("displayB").eq($index).addClass("displayB")
    });


    //    创投路演 评委介绍
    $(".forum_rf_list_theme_ul li").click(function(){

        var $index = $(this).index();
        $(this).addClass("theme_liToselect").siblings().removeClass("theme_liToselect");
        $(this).parent(".forum_rf_list_theme_ul").siblings().find(".ent_mainb").removeClass("displayB").eq($index).addClass("displayB");
        if($index == 0){
            var swiper4 = new Swiper('.swiper-container4', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 65,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                slidesPerView: 3,
                loop: true
            });
        }else if($index == 2){
            var swiper5 = new Swiper('.swiper-container5', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 65,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                slidesPerView: 3,
                loop: true
            });
        }else{
            // var swiper2 = new Swiper('.swiper-container2', {
            //     nextButton: '.swiper-button-next',
            //     prevButton: '.swiper-button-prev',
            //     paginationClickable: true,
            //     spaceBetween: 65,
            //     centeredSlides: true,
            //     autoplay: 2500,
            //     autoplayDisableOnInteraction: false,
            //     slidesPerView: 3,
            //     loop: true
            // });
        }
    });
//    点击剧照
//     $(".performUlTos li").eq(3).click(function(){
//         alert(1);
//         var $index = $(this).index();
//         $(this).parent(".performUlTos").siblings(".performUlTo_Main").find("div").eq($index).find(".apply").find(".performUlTo1_ul").addClass("gallery").parents(".forum_rf_list").siblings().find(".performUlTo1_ul").removeClass("gallery");
//     })
});