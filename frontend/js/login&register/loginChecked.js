function login(){
    // console.log(document.getElementById('login_username').value);
    //ajax post请求
    $(function(){
        $.ajax({
            url: backend + "/sysController/login",
            type: "post",
            //将json转为string格式发送
            data : JSON.stringify({"username": document.getElementById('login_username').value,"password": document.getElementById('login_password').value}),
            dataType: "json",
            contentType : "application/json",
                success:function(data){
                    console.log(data);
                    //将userId保存在本地
                    if(data.ok==false) {
                        layer.msg(data.message, {
                            icon: 2,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          }, function(){
                            location.assign("#");
                          }); 
                    }
                    else {
                        localStorage.setItem("userId",data.data);
                        sessionStorage.setItem("admin",document.getElementById('login_username').value);
                        layer.msg("登陆成功,正在跳转...", {
                              icon: 1,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          }, function(){
                            window.location.assign('index.html');
                          }); 
                    }
                    
                    //location.assign("shoppingCart.html");
                }
        })
    })
}

function register(){
    
    // console.log(document.getElementById('reg_password1').value);
    //ajax post请求
    $(function(){
        $.ajax({
            url: backend + "/sysController/register",
            type: "post",
            //将json转为string格式发送
            data : JSON.stringify({"username": document.getElementById('reg_username').value
            ,"password": document.getElementById('reg_password1').value
            ,"phone": document.getElementById('reg_phone').value}),
            dataType: "json",
            contentType : "application/json",
                success:function(data){
                    if(data.ok==false) {
                        layer.msg(data.message, {
                            icon: 2,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          }, function(){
                            location.assign("#");
                          }); 
                    }
                    else {
                        localStorage.setItem("userId",data.data);
                        sessionStorage.setItem("admin",document.getElementById('login_username').value);
                        layer.msg("注册成功", {
                            icon: 1,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          }, function(){
                          
                            window.location.assign('index.html');
                          }); 
                    }
                }
        })
    })
}