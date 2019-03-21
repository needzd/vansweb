$(function(){
	let i=-1299;
	
	$(".bleft").click(function(){
		i+=433;
		// console.log(i)
		if(i>0){
			i=-433*5
			$(".slideshow").css("left",i)
		}else{
			$(".slideshow").animate({"left":i},200)
		}
	});

	$(".rleft").click(function(){
		i-=433;
		console.log(i)
		// if(i<-(433*3+1299){
			if(i<-2598){
			i=-1299
			$(".slideshow").css("left",i)
		}else{
			$(".slideshow").animate({"left":i},200)
		}
	});
});



