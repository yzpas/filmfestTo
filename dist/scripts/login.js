/**
 * Created by Administrator on 2017/8/29.
 */

$(function(){
    $(".Pcl").click(function(){
        if($('em').hasClass('lei')){
            $('em').removeClass('lei');
        }else{
            $('em').addClass('lei');
        }
    });
/*点击忘记密码*/
    $(".rema").click(function(){
        $(".forget").show();
        $(".for_main").show();
    });
    $(".btn3").click(function(){
        $(".forget").hide();
        $(".for_main").hide();
        $(".for_xin").hide();
    });
    $(".btn5").click(function(){
        settime(this)
    })
});