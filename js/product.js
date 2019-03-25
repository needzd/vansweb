var goodsid = getUrlParam("goodsId");
let userInfo = getCookie("userphone");

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
 
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}

$(function(){
	// let goodsid = getUrlParam("goodsId");
	let datas = null;
	$.ajax({
		type:"GET",
		url:"php/getGoodsInfo.php",
		dataType:"JSON",
		data:{"goodsId":goodsid},
		success:function(data){
			datas = data;
			showgoodsDetail(data);
			fdj();
			shop_count();
			$("#shopcount").click(function(){
				location.href="shopcar.html";
			})
		}	
	});

		//动态获取数据
		function showgoodsDetail(str){
			let htmlStr = "";
			htmlStr +=`
				<div class="con_main">
					<div class="c_m_left">
						<div class="m_l_bigbox">
							<div id="mirror_box"></div>
							<div id="shoe_box" class="shoe_box">
								<img src="${str.goodsImg}" />
							</div>
						</div>
						<ul id="l_imgslist" class="l_imgslist">
							<li><img src="${str.goodsImg}" ></li>
							<li><img src="${str.beiyong1}" ></li>
							<li><img src="${str.beiyong2}" ></li>
							<li><img src="${str.beiyong3}" ></li>
							<li><img src="${str.beiyong4}" ></li>
						</ul>
					</div>
					<div class="c_m_yingcang"></div>
					<div class="c_m_right">
						<div class="rig_title">
							<h2 id="name">${str.goodsName}</h2>
							<p class="shoeprice">￥ ${str.goodsPrice}.00</p>
						</div>
						<div class="shoe_color">
							<h4>选择颜色：粉色/白色</h4>
							<img class="s_c_imgs" src="${str.beiyong5}" >
						</div>
						<div class="shoe_xiema">
							<h4>选择鞋码：</h4>
							<ul class="s_xiema">
								<li>34.5</li>
								<li>35</li>
								<li>35.5</li>
								<li>36</li>
								<li>36.5</li>
								<li>37</li>
								<li>38</li>
								<li>39</li>
								<li>39.5</li>
								<li>40</li>
								<li>40.5</li>
								<li>41</li>
								<li>41.5</li>
							</ul>
						</div>
						<div class="shoe_count">
							<h4 class="c_title">选购数量：</h4>
							<span class="shoe_c">
								<span id="shoe_jian"> - </span>
								<input id="s_count" type="text" value="1" min="1">
								<span id="shoe_add"> + </span>
							</span>	
						</div>
						<div class="shopbtn">
							<input type="button" value="加入购物车" class="shopcarbtn">
							<button class="buybtn">立即购买</button>
							<div class="collect">
								<img src="img/xin.jpg" />
								收藏该商品
							</div>
						</div>
						<div class="product_Prompt">
							<span class="shunfeng">
								<img class="sfimg" src="img/sf.png" />
								<span>顺丰包邮</span>					
							</span>
							<span class="huanhuo">
								<img class="hhimg" src="img/15.png" />
								<span>15天无理由退换货</span>
							</span>
						</div>
					</div>	
				</div>
			`
			$(".content").html(htmlStr);
		};		
})
	
//放大镜
	function fdj(){
			let Imgs;
			$("#l_imgslist").on("mouseenter","li",function(){
				$(this).children().css({"border":"1px solid red"});
				$(this).siblings().children().css({"border":"1px solid #fff"});
				Imgs=$(this).children("img").attr("src");
				$("#shoe_box").children("img").attr({src:Imgs});
			});
		
			$(".m_l_bigbox").mousemove(function(e){
				//一、数据处理
				//1、改变数据（放大镜子的left和top）		
				let left1 =  e.pageX-$(this).offset().left-$("#mirror_box").width()/2;
				let top1 =  e.pageY-$(this).offset().top-$("#mirror_box").height()/2;
				
				//2.边界处理
				if(left1<0){
					left1=0;
				}else if(left1>$(this).width()-$("#mirror_box").width()){
					left1=$(this).width()-$("#mirror_box").width();
				}
		
				if(top1<0){
					top1=0;
				}else if(top1>$(this).height()-$("#mirror_box").height()){
					top1=$(this).height()-$("#mirror_box").height();
				}
		
				//二外观呈现
				$("#mirror_box").css({"left":left1,"top":top1});
				$(".c_m_yingcang").css({"background-position":`${-1*2.5*left1}px ${-1*2.5*top1}px`})
			
				// console.log(left1);
				// console.log(top1);
		
			})
		
			$(".m_l_bigbox").mouseenter(function(){
				$("#mirror_box").css("display","block");
				$(".c_m_yingcang").css("display","block");
				if(Imgs==undefined){
					Imgs=$("#shoe_box").children("img").attr("src");
				}
				$(".c_m_yingcang").css({"background-image":`url(${Imgs})`,zIndex:2});
		
			})
			$(".m_l_bigbox").mouseleave(function(){
				$("#mirror_box").css("display","none");
				$(".c_m_yingcang").css("display","none");
			})
	}

	//点击加入购物车
	let goodsCount;
	function shop_count(){
		let jianshu=$("#s_count").val();
		$("#shoe_add").click(function(){
			jianshu ++;
			$("#s_count").val(jianshu);
		})
		$("#shoe_jian").click(function(){
			jianshu --;
			if(jianshu<=0){
				jianshu=0;
			}
			$("#s_count").val(jianshu);
		})
		$(".shopcarbtn").click(function(){
			$(".hd_my_show").html(jianshu);
			if(userInfo==null){
				location.href="login.html";
			}
			goodsCount = $("#s_count").val();
			addCar(userInfo,goodsid,goodsCount)		
		})	
	}

	function addCar(){
		$.ajax({
			type:"get",
			url:"php/addShoppingCart.php",
			data:{vipName:userInfo,goodsId:goodsid,goodsCount:goodsCount},
			dataType:"JSON",
			success:function(data){
				if(data == "1"){
					alert("添加成功！")
				}else{
					alert("添加失败！")
				}
			}
		});
	}

	
