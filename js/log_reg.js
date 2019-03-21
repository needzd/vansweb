
$(function(){
    $("#login-btn").click(function(){
        $.post("php/loginCheck.php",{userphone:$("#userphone").val(),userpass:$("#userpass").val()},function(data){
            console.log("data:"+data);
           if(data==1){
               addCookie("userphone",$("#userphone").val(),7);
               console.log("addCookie:"+addCookie("userphone",$("#userphone").val(),7));
               alert("登陆成功！");
               location.href="index.html";
           }else if(data==0){
               alert("登录失败！");
           }else{
               alert(data);
           }
        });
    });
})





$(function(){
    $("#reg-btn").click(function(){
        $.get("php/regCheck.php",{userphone:$("#userphone").val(),userpass:$("#userpass").val()},function(data){
            if(data==1){
                alert("注册成功");
                location.href="login.html";
            }else if(data==0){
                alert("注册失败");
            }else if(data==2){
                alert("该用户已被注册");
            }else if(data==3){
                alert("请输入用户名或密码")
            }else{
                alert(data);
            }
        });
    });
})

