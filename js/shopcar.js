$(function(){
    let vipName = getCookie("userphone")
    $.get("php/getShoppingCart.php",{"vipName":vipName},shoe,"json");

    // $(".count_jian").each(function(){
    //     $(this).click(function(){
    //         let c_jian = $(".count_text").val();
    //         let zong_count = $(".hd_my_show").html();
    //         c_jian--;
    //         zong_count--;
    //         // $.get("php/updateGoodsCount.php",xiugai_count,"json")
    //     })
    // })
});

function shoe(str){
    let htmlStr = "";
    for(let i=0;i<str.length;i++){
        htmlStr +=`
        <div class="c_shoe">
            <span>
                <input class="quanxuan" type="checkbox" checked/>  选择
            </span>
            <span>
                <div class="shoe_xinxi">
                    <img class="xx_imgs" src="${str[i].goodsImg}" />
                    <div class="xx_text">
                        <a class="shoe_bt" href="#">${str[i].goodsName}</a>
                        <p>黄色/黑色/36</p>
                        <a class="bianji" href="#">编辑</a>
                    </div> 
                </div>
            </span>
            <span class="count_box">
                <p class="count_jian">-</p>
                <input class="count_text" type="text" value="${(str[i].goodsCount)}" />
                <p class="count_jia">+</p>
            </span>
            <span class="count_dj">￥${str[i].goodsPrice}.00</span>
            <span class="count_yh">￥0</span>
            <span class="count_zj">￥595.00</span>
            <span class="yiruchu"><a href="#">移入收藏夹</a> /<a href="#">移除</a></span>
        </div>
        `  
        $(".cart_s").html(htmlStr); 
        jia_jian();        
    }  
    let zong_count = parseInt($(".count_text").val()*$(".c_shoe").length);
    $(".hd_my_show").html(zong_count); 
   
}  


function jia_jian(){
    $(".count_jia").each(function(){
        $(this).click(function(){
            let c_jia = $(this).prev().val();
            let zong_count = $(".hd_my_show").html();
            c_jia++;
            zong_count++;
            $(this).prev().val(c_jia);
            $(".hd_my_show").html(zong_count);
        });
    });

    $(".count_jian").each(function(){
        $(this).click(function(){
            let c_jian = $(this).next().val();
            let zong_count = $(".hd_my_show").html();
            if(c_jian==1){
                // c_jian==1;
                return;
            }
            c_jian--;
            zong_count--;
            // $.get("php/updateGoodsCount.php",xiugai_count,"json")
            $(this).next().val(c_jian);
            $(".hd_my_show").html(zong_count);
        });
    });
}

