(function(){
  //登录
  history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
  });
  let $btn=$("#login");
  $btn.click(function(){
    let $uname=$("#uname");
    let uname=$uname.val();
    let $upwd=$("#upwd");
    let upwd=$upwd.val();
    console.log(upwd);
    let $alertuser=$(".alertuname")
    let $alertupwd=$(".alertupwd")
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
    if(islogin==true){
      let shuju={
        "action": "login",
        "data": {
          "username": uname,
          "password": upwd
        }
      }
      $.ajax({
        url:"http://zhuishu.zhiask.cn/api",
        type:"post",
        header: { 
          "Content-Type": "application/json"  //multipart/form-data;boundary=--xxxxxxx   application/json
        }, 
        contentType: "text/html;charset=utf-8",
        data:JSON.stringify(shuju),
        dataType: "json",
        success: function(res) {
          if(res.errcode==0){
            console.log("成功");
            sessionStorage.setItem("token",res.data.token)
            sessionStorage.setItem("userid",res.data.id)
            window.location.href=`./home.html`
          }else{
            $alertupwd.html("账号或密码有误");
          }
        }
      })
    }
  })
})()