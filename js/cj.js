$(function(){
	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
       
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    var goodsid =getUrlParam("goodsId");
    console.log(goodsid);
    	let datas=null;
	$.ajax({
		type:"GET",
		url:"php/getGoodsInfo.php",
		dataType:"JSON",
		data:{
			"goodsId": goodsid
		},
		success: function(data){
			 // $(".bigger").css("background":`url(${data.goodsImg})`);
				datas=data;
			// console.log(data.goodsImg);
			// console.log(data);
			showgoodsDetail(data);
			}
		
	});	

	function showgoodsDetail(str){
		console.log(str);
		var htmlStr = "";
		htmlStr +=`
		<div class="goodsInfo-left">
			<div class="collect">
				<span class="empty-heart"></span>
				<div class="addTo">
					<span class="addTo-txt">加入我的心愿单</span>
					<span class="fact-heart"></span>
				</div>
				
			</div>
			<div class="magnifying-glass">
				<div class="small-pic">
					<ul class="small-pic-ul">
						<li class="small-pic-li"><img src="${str.goodsImg}" alt="第1张图片" class="goodsImg"></li>
						<li class="small-pic-li"><img src="${str.beiyong1}" alt="第2张图片" class="goodsImg"></li>
						<li class="small-pic-li"><img src="${str.beiyong2}" alt="第3张图片" class="goodsImg"></li>
						<li class="small-pic-li"><img src="${str.beiyong3}" alt="第4张图片" class="goodsImg"></li>
						<li class="small-pic-li"><img src="${str.beiyong4}" alt="第5张图片" class="goodsImg"></li>
					</ul>
				</div>
				<div class="bigarea">
					<div class="bigger">
						
					</div>
				</div>
			</div>
		</div>
		<!-- 商品信息 -->
		<div class="goodsInfo-right">
			<h3 class="Cdname">${str.goodsName}</h3>
			 <p class="Edname">${str.goodsDesc}</p>
			<div class="comment">
				<span></span>
				<a>共0条评论</a>
			</div>
			<div class="brief">Sì，意大利语的“是”；Passione，意大利语的“热情” 选择全新阿玛尼迷情挚爱女士香水，选择... <a href="#intromore" class="look-more">查看更多 ></a>
			</div>
			<div class="guige-box">
				<ul class="guige-ul">
					<li>30ml</li>
					<li>50ml</li>
					<li>100ml</li>
				</ul>
			</div>
			
			<div class="Down">
				<div class="Choose-inp">
					<div class="choose-goodscount">
						<span class="valueTxt">数量 1</span>
						<span class="icon-btn01"></span>
						<ul class="choose-ul">
							<li>数量 1</li>
							<li>数量 2</li>
							<li>数量 3</li>
							<li>数量 4</li>
							<li>数量 5</li>
						</ul>
					</div>
				</div>
				<div class="btn-box">
						<div class="price">￥${str.goodsPrice}</div>
						<div class="buybtn"><a href="#">立即购买</a></div>
				</div>
			</div>
		</div>
	`;
		// my$(".spxq-content-left").innerHTML = htmlStr;
		$(".goodsInfo").html(htmlStr);
		$(".bigger").css({backgroundImage:`url('${datas.goodsImg}')`,backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize:"505px 505px"});

	
// 收藏小心心
	$(".collect").hover(
	  function () {
	   	$(".addTo").css("display","block");
	  },
	  function () {
	    $(".addTo").css("display","none");
	  }
	);

// 点击小图片切换大图片

	$(".small-pic-li").on("click",function(){
		$(this).css("border","3px solid #000");
		$(".small-pic-li").not($(this)).css("border","1px solid #ccc");
		//this是事件源，DOM
		 let str = $(this).children().attr("src");
		// console.log(str);
$(".bigger").css({backgroundImage:`url(${str})`,backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize:" 505px 505px"});

	})


// 进入大图片，出现放大镜
	
	$(".bigarea").mouseenter(function(){
 		 $(".bigger").css("backgroundSize","1010px 1010px");
 		 $(".bigger").css("backgroundRepeat","no-repeat");
 		 $(".bigger").css("backgroundPosition","center");

});

// 进入大图片，出现放大镜,并随鼠标移动
	$(".bigger").on("mousemove",function(event){
 	let evt = event || window.event;
 	let Posleft = evt.pageX - ($(this).parent().width())/2;
 	let Postop = evt.pageY - ($(this).parent().height())/2;
 	console.log(Posleft);
 	console.log(Postop);
 	 $(".bigger").css("background-position",`${-Posleft*1.5}px ${-Postop*1.5}px`)
 })


// 选择规格

	$(".guige-ul li").on("click",function(){
		$(this).css("border-color","#666")
		$(".guige-ul li").not($(this)).css("border-color","#ccc");
	})



// 选择数量

	$(".choose-goodscount").toggle(
	  function () {
	    $(".choose-ul").css("display","block");
	  },
	  function () {
	   $(".choose-ul").css("display","none");
	  }
	);
	$(".choose-ul li").on("click",function(){
			let inner = $(this).html();
			$(".valueTxt").html(inner);
		})





// 商品详细信息


	$(".intro-decri").on("click",function(){
		$(this).css("border-bottom","3px solid #000");
		$(".intro-use").css("border","0");
		$(".decr-content").css("display","block");
		$(".use-content").css("display","none");
	 }); 
	$(".intro-use").on("click",function(){
		$(this).css("border-bottom","3px solid #000");
		$(".intro-decri").css("border","0");
		$(".decr-content").css("display","none");
		$(".use-content").css("display","block");


	 });
	}
})




$(function(){
  // 用get获取数据
  $.get(
    "php/getGoodsList.php",
    showDate,
    "json"
    )
// 回调函数----页面显示
  function showDate(obj){
    var htmlStr = "";
    for (var i=0; i<obj.length;i++ ){
      data = obj[i];
      console.log(data);
      // console.log(data.goodsImg+data.goodsName+data.goodsPrice+data.goodsDesc);    
        htmlStr += `<div class="goods" id="${data.goodsId}">

          <div class="show">
            <a href="goodsdetails.html?goodsId=${data.goodsId}" class="a-img">
            <img src="${data.goodsImg}" class="goodImg"/>
            </a>
          </div>

          <div class="goodstxt">

            <div class="Cname"><a href="#">${data.goodsName}</a></div>
            <div class="Ename"><a href="#">${data.goodsDesc}</a></div>
            <div class="guige">30ml</div>
            <div class="star"></div>
            <div class="btn-box">
              <div class="price">￥${data.goodsPrice}</div>
              <div class="buybtn"><a href="#">立即购买</a></div>
            </div>
          </div>
        </div> `;
    }
    my$("#goods-list").innerHTML = htmlStr ;
  }
  
})
 


















// $(function(){
// 	$(".collect").hover(
// 	  function () {
// 	   	$(".addTo").css("display","block");
// 	  },
// 	  function () {
// 	    $(".addTo").css("display","none");
// 	  }
// 	);
// })





// 点击小图片切换大图片
// $(function(){

// 	$(".small-pic-li").on("click",function(){
// 		$(this).css("border","3px solid #000");
// 		$(".small-pic-li").not($(this)).css("border","1px solid #ccc");
// 		//this是事件源，DOM
// 		 let str = $(this).children().attr("src");
// 		// console.log(str);
// 		$(".bigger").css({backgroundImage:`url(${str})`,backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize:" 505px 505px"});

// 	 }); 



// 进入大图片，出现放大镜
	
// 	$(".bigarea").mouseenter(function(){
//  		 $(".bigger").css("backgroundSize","1010px 1010px");
//  		 $(".bigger").css("backgroundRepeat","no-repeat");
//  		 $(".bigger").css("backgroundPosition","center");

// });


// })

// $(function(){
// 	$(".bigger").on("mousemove",function(event){
//  	let evt = event || window.event;
//  	let Posleft = evt.pageX - ($(this).parent().width())/2;
//  	let Postop = evt.pageY - ($(this).parent().height())/2;
//  	console.log(Posleft);
//  	console.log(Postop);
//  	 $(".bigger").css("background-position",`${-Posleft*1.5}px ${-Postop*1.5}px`)
//  })
// })





// 选择规格
// $(function(){
// 	$(".guige-ul li").on("click",function(){
// 		$(this).css("border-color","#666")
// 		$(".guige-ul li").not($(this)).css("border-color","#ccc");
// 	})
// })


// 选择数量
// $(function(){
// 	$(".choose-goodscount").toggle(
// 	  function () {
// 	    $(".choose-ul").css("display","block");
// 	  },
// 	  function () {
// 	   $(".choose-ul").css("display","none");
// 	  }
// 	);
// 	$(".choose-ul li").on("click",function(){
// 			let inner = $(this).html();
// 			$(".valueTxt").html(inner);
// 		})
// })




// 商品详细信息
// $(function(){

// 	$(".intro-decri").on("click",function(){
// 		$(this).css("border-bottom","3px solid #000");
// 		$(".intro-use").css("border","0");
// 		$(".decr-content").css("display",
