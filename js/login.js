window.onload = function(){

	my$("#userphone").onblur = function(){
		let phone = /^1[1-9]\d{9}$/;
		if(!phone.test(my$("#userphone").value)){
			my$(".userspan")[0].innerHTML = "请输入正确的11位手机号!";
			my$(".userspan")[0].style.display = "block";
		}else{
			my$(".userspan")[0].style.display = "none";
		}		
	}
	
	my$("#userpass").onblur = function(){
		let pass1 = /^[a-z0-9_-]{8,20}$/;
		if(!pass1.test(my$("#userpass").value)){
			my$(".userspan")[1].innerHTML = "请输入8-20个字母、数字组合!";
			my$(".userspan")[1].style.display = "block";
		}else {
			my$(".userspan")[1].style.display = "none";
		}
	}

	my$("#login").onclick = function(){
		if(my$("#userphone").value == ""){
			my$(".userspan")[0].innerHTML = "用户不能为空!";
			my$(".userspan")[0].style.display = "block";
			// return;
		}else{
			my$(".userspan")[0].style.display = "none";
		}
		if(my$("#userpass").value == ""){
			my$(".userspan")[1].innerHTML = "密码不能为空!";
			my$(".userspan")[1].style.display = "block";
			return;
		}else{
			my$(".userspan")[1].style.display = "none";
		}
		ajax1811ByObjAndDefault(
			{
				"url":"php/login.php",
				"method":"post",
				"param":`userphone=${my$("#userphone").value}&userpass=${my$("#userpass").value}`,
				"func":function(num){
					if(num == "1"){
						alert("登录成功！");
						addCookie("userphone",my$("#userphone").value,7);
						location.href="index.html";
					}else{
						alert("登录失败！");
					}	
				}
			}
		);		
	}
}	

function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
