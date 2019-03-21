window.onload = function(){
	function showData(num){
		if(num=="0"){
			my$(".userspan")[0].innerHTML = "用户已经被注册!";
			my$(".userspan")[0].style.display = "block";
		}else{
			my$(".userspan")[0].style.display = "none";
		}
		// if(my$("#userphone").value == ""){
		// 	my$(".userspan")[0].innerHTML = "用户不能为空!";
		// 	my$(".userspan")[0].style.display = "block";
		// }else{
		// 	my$(".userspan")[0].style.display = "none";
		// }
	}

	my$("#userphone").onblur = function(){
		let phone = /^1[1-9]\d{9}$/;
		if(!phone.test(my$("#userphone").value)){
			my$(".userspan")[0].innerHTML = "请输入11位手机号!";
			my$(".userspan")[0].style.display = "block";
		}else{
			my$(".userspan")[0].style.display = "none";
		}
		ajax1811ByObjAndDefault(
				{
					"url":"php/reg.php",
					"param":"userphone="+this.value,
					"func":showData
				}
			);		
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

	my$("#pass").onblur =function(){
		if(my$("#userpass").value != my$("#pass").value){
			my$(".userspan")[2].innerHTML = "两次密码不一致!";
			my$(".userspan")[2].style.display = "block";
		}else{
			my$(".userspan")[2].style.display = "none";
		}
	}


	my$("#reg").onclick = function(){
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
				"url":"php/regSave.php",
				"method":"post",
				"param":`userphone=${my$("#userphone").value}&userpass=${my$("#userpass").value}`,
				"func":function(num){
					if(num == "1"){
						alert("注册成功！");
						location.href = "login.html";
					}else{
						alert("注册失败！");
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