$(function () {
//    性别 class=“onq”
    $(".ul1 li").click(function(){
       if($(this).hasClass("onq")){}else{
            $(this).addClass("onq").siblings().removeClass("onq");
       }
    });
//    是否在校 class=“onq”
    $(".ul2 li").click(function(){
        if($(this).hasClass("onq")){}else{
            $(this).addClass("onq").siblings().removeClass("onq");
        }
    });
//      学历
    $(".Rla").click(function(){
        $(".posul").fadeIn();
    });
    $(".posul li").click(function(){
        var val = $(this).find("p").html();
        $(".Rla").attr("placeholder",val);
        $(".posul").fadeOut();
    });

    var i = 0;
    var H = 962;
    var Hto = 0;
    var po = "";
    var htmla = "";
    //login
//    点击添加
    $(".lo_span1").on("click",function(){
        i++;
        if(i == 1){
            po = "请输入语种及等级";
            htmla = "语言类";
        }else if( i == 2 ){
            po = "请输入计算机等级";
            htmla = "计算机类";
        }else{
            po = "请输入驾驶证等级";
            htmla = "驾驶类";
        }
        if(i<=3){
            $(".Tc").append(
                "<div class=\"lo_inputa boma\">\n" +
                "                            <div class=\"sel\">\n" +
                "                                <p class='p6'>"+htmla+"</p>" +
                "                                <ul class=\"sel_ul\">\n" +
                "                                    <li id='1'>语言类</li>\n" +
                "                                    <li id='2'>计算机类</li>\n" +
                "                                    <li id='3'>驾驶类</li>\n" +
                "                                </ul>\n" +
                "                            </div>\n" +
                "                            <input type='text' class='addInput' placeholder='"+po+"' >" +
                "                            <span class=\"sel_span\" id='"+i+"'>删除</span>\n" +
                "                        </div>"
            );
            $(".login").css({"height":H +(41*i) +"px"});
        }else{
            i=3;
        }
        //      语言类
        $(".sel").on("click",function(){
            $(this).find("ul").fadeIn();
        });
        $(".sel_ul li").bind("click",function(event){
            var val = $(this).html();
            var index =  $(this).attr("id");
            $(this).parent().siblings("p").html(val);
            $(".sel_ul").fadeOut();
            if( index==1 ){
                $(this).parents(".sel").siblings("input").attr({"placeholder":"请输入语种及等级"})
            }else if(  index == 2 ){
                $(this).parents(".sel").siblings("input").attr({"placeholder":"请输入计算机等级"})
            }else{
                $(this).parents(".sel").siblings("input").attr({"placeholder":"请输入驾驶证等级"})
            }
            event.stopPropagation();
        });
        $(".sel_span").on("click",function(){
            $(this).parent(".lo_inputa").remove();
            i = $(".boma").length;
            console.log(i);
            if( i == 2 ){
                $(".login").css({"height":"1044px"});
            }else if( i == 1 ){
                $(".login").css({"height":"1003px"});
            }else{
                $(".login").css({"height":"962px"});
            }


        });


    });



});