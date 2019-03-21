//固定头部
$(window).scroll(function(){
	var scroll=document.body.scrollTop || document.documentElement.scrollTop;
	if(scroll>=30){
		$(".hdMenuBox").css({"box-shadow":"0px 0px 5px 1px #ccc","border-bottom":"1px solid #999","z-index":"10","position":"fixed","background":"#fff","height":"60px","width":"100%","margin":"0 auto" });
		$(".hdMenu").css({"z-index":"10","width":"1280px","height":"60px","top":"0px","background":"#fff","margin":"0 auto"});
		$(".nav").css({"margin-left":"299px","margin-top":"8px"});
		$(".hdSerach").css({"margin-top":"18px","margin-right":"20px"});
		$(".logo").children().css({"width":"94px","height":"60px","margin-left":"25px"});
		$(".gonggao").css({"display":"none"});
		$(".nav_box1").css({"position":"fixed","top":"53px"})
		$(".nav_box2").css({"position":"fixed","top":"53px"})
		$(".nav_box3").css({"position":"fixed","top":"53px"})
		$(".nav_box4").css({"position":"fixed","top":"53px"})
		$(".zhiding").css("display","block");
		$(".c_m_yingcang").css("z-index","20");

	}else{
		$(".hdMenuBox").css({"box-shadow":"0px 0px 0px 0px #fff","border-bottom":"0","z-index":"5","margin":"0 auto","background":"#fff"});
		$(".hdMenu").css({"z-index":"10","margin":"0 auto","width":"1280px","height":"130px","top":"0px","background":"#fff","z-index":"10"});
		$(".nav").css({"margin-left":"299px","margin-top":"73px"});
		$(".hdSerach").css({"margin-top":"81px","margin-right":"20px"});
		$(".logo").children().css({"width":"156px","height":"130px","margin-left":"25px"});
		$(".gonggao").css({"display":"block"});
		$(".nav_box1").css({"position":"fixed","top":"120px"})
		$(".nav_box2").css({"position":"fixed","top":"120px"})
		$(".nav_box3").css({"position":"fixed","top":"120px"})
		$(".nav_box4").css({"position":"fixed","top":"120px"})
		$(".zhiding").css("display","none");
	}
})


//回到顶部
$(function(){
  $(".zhiding").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }); 
 })


//导航栏效果
$(".l1").mouseover(function(){
	$(".nav_box1").show();
	$(".nav_li_jiantou1").show();
	$(".l1>a").css("color","#D6000F");
});
$(".nav_box1").mouseover(function(){
	$(".nav_box1").show();
	$(".nav_li_jiantou1").show();
	$(".l1>a").css("color","#D6000F");	
});
$(".l1").mouseout(function(){
	$(".nav_box1").hide();
	$(".nav_li_jiantou1").hide();
	$(".l1>a").css("color","#000");
});
$(".nav_box1").mouseout(function(){
	$(".nav_box1").hide();
	$(".nav_li_jiantou1").hide();
	$(".l1>a").css("color","#000");
})


$(".l2").mouseover(function(){
	$(".nav_box2").show();
	$(".nav_li_jiantou2").show();
	$(".l2>a").css("color","#D6000F");
});
$(".nav_box2").mouseover(function(){
	$(".nav_box2").show();
	$(".nav_li_jiantou2").show();
	$(".l2>a").css("color","#D6000F");	
});
$(".l2").mouseout(function(){
	$(".nav_box2").hide();
	$(".nav_li_jiantou2").hide();
	$(".l2>a").css("color","#000");
});
$(".nav_box2").mouseout(function(){
	$(".nav_box2").hide();
	$(".nav_li_jiantou2").hide();
	$(".l2>a").css("color","#000");
})

$(".l3").mouseover(function(){
	$(".nav_box3").show();
	$(".nav_li_jiantou3").show();
	$(".l3>a").css("color","#D6000F");
});
$(".nav_box3").mouseover(function(){
	$(".nav_box3").show();
	$(".nav_li_jiantou3").show();
	$(".l3>a").css("color","#D6000F");	
});
$(".l3").mouseout(function(){
	$(".nav_box3").hide();
	$(".nav_li_jiantou3").hide();
	$(".l3>a").css("color","#000");
});
$(".nav_box3").mouseout(function(){
	$(".nav_box3").hide();
	$(".nav_li_jiantou3").hide();
	$(".l3>a").css("color","#000");
})


$(".l4").mouseover(function(){
	$(".nav_box4").show();
	$(".nav_li_jiantou4").show();
	$(".l4>a").css("color","#D6000F");
});
$(".nav_box4").mouseover(function(){
	$(".nav_box4").show();
	$(".nav_li_jiantou4").show();
	$(".l4>a").css("color","#D6000F");	
});
$(".l4").mouseout(function(){
	$(".nav_box4").hide();
	$(".nav_li_jiantou4").hide();
	$(".l4>a").css("color","#000");
});
$(".nav_box4").mouseout(function(){
	$(".nav_box4").hide();
	$(".nav_li_jiantou4").hide();
	$(".l4>a").css("color","#000");
})



// footer效果
$(".f_b_title").click(function(){
	$(".country_list").toggle();	
});
// $(".maxFooter").click(function(){
// 	$(".country_list").css("display","none");	
// });


//用户登录和退出效果
$(function(){
	let userphone = getCookie("userphone");

	if(userphone){
		$("#hd_log_no").html("您好"+userphone);
		$("#hd_log_no").css("display","block");
		$("#hd_log").css("display","none");
		$(".hd_my_show").css("display","block");
	
		$("#hd_reg_no").css("display","block");
		$("#hd_reg").css("display","none");
		$("#hd_reg_no").click(function(){
			$("#hd_reg_no").css("display","none");
			$("#hd_reg").css("display","block");
			$("#hd_log_no").css("display","none");
			$("#hd_log").css("display","block");
			$(".hd_my_show").css("display","none");
			addCookie("userphone",$("#userphone").val(),-7);
			$("#hd_log_no").html("登录");	
		})
	}
	
})










