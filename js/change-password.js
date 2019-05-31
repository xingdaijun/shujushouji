(function(){
  //登录
  let $btn=$("#login");
  let id=sessionStorage.getItem("userid");
  let token=sessionStorage.getItem("token");
  $btn.click(function(){
    let uname=$("#uname").val();
    let upwd=$("#upwd").val();
    let again=$("#againupwd").val();
    let $alertuser=$(".alertuname");
    let $alertupwd=$(".alertupwd");
    let $alertagain=$(".alertagain");
    console.log(again);
    if(uname==""){
      islogin=false;
      $alertuser.html("用户名不能为空");
      return;
    }else{
      $alertuser.html("");
      islogin=true;
    };
    if(upwd==""){
      $alertupwd.html("密码不能为空");
      islogin=false;
      return;
    }else{
      $alertupwd.html("");
      islogin=true;
    };
    if(upwd==uname){
      $alertupwd.html("新老密码不能一致");
      islogin=false;
      return;
    }else{
      $alertupwd.html("");
      islogin=true;
    };
    if(again==""){
      $alertagain.html("确认密码不能为空");
      islogin=false;
      return;
    }else{
      $alertagain.html("");
      islogin=true;
    };
    if(again!=upwd){
      $alertagain.html("两次密码不一致");
      islogin=false;
      return;
    }else{
      $alertagain.html("");
      islogin=true;
    };
    if(islogin==true){
      $.ajax({
        url:"http://zhuishu.zhiask.cn/api",
        type:"post",
        headers: { 
          "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
          "Access-Token":token
        }, 
        contentType: "text/html;charset=utf-8",
        data:JSON.stringify({
          "action": "mod_pwd",
          "data": {
              "id": id,
              "password": uname,
              "password_new": upwd
          }
        }),
        dataType: "json",
        success: function(res) {
          console.log(res)
          if(res.errcode==0){
            console.log("成功");
            window.location.href=`http://127.0.0.1:5500/login.html`
          }else{
            $alertagain.html("密码有误");
          }
        }
      })
    }
  })
})()