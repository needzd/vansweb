$(function(){
	//用get获取数据
	$.get("php/getGoodsList.php",showDate,"json")
	
	//回调函数
	function showDate(obj){
		let htmlStr = "";
		for(let i=0;i<obj.length;i++){
			data = obj[i];
			// console.log(data);
			htmlStr +=`
				<li class="shoe_list">
					<div class="shoe_img">
						<a href="product.html?goodsId=${data.goodsId}">
							<img class="shoe1" src="${data.goodsImg}" />
							<img class="shoe1-1" src="${data.beiyong1}" />
						</a>
						<a class="shoe_buy" href="#">快速购买</a>
					</div>
					<div class="shoe_title">
						<h3><a href="#">${data.goodsName}</a></h3>
						<p>￥ ${data.goodsPrice}.00</p>
					</div>
				</li>
			`
		}
		$(".right_shoe").html(htmlStr);
	}
})

$(".list_color").click(function(){
	$(this).find(".list_color_con").addClass("left_c");
	$(".left_c").toggle();
	$(this).find(".list_color_con").removeClass("left_c");
})	


