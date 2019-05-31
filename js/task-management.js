(function(){
  let planmsg=JSON.parse(sessionStorage.getItem("planmsg"));
  let token=sessionStorage.getItem("token");
  let topWindow = $(window.parent.document);
  let $iframe = topWindow.find('#right>iframe');
  //返回
  $(".back").click(function(){
    history.go(-1);
  })
  //渲染设置数据
  $(".plan-name input").attr("value",planmsg.name)
  $(".time").val(planmsg.interval/1000);
  //过滤
  function guolv(){
    let html1="";
    for(let a=0;a<planmsg.filter.length;a++){
      html1+=
      `<li>
      <span>${planmsg.filter[a].pattern}</span>
      <span>替换为</span>
      <span>${planmsg.filter[a].replace}</span>
      <i class="iconfont icon-chahao" data-type="filter"></i>
    </li>`
    }
    $(".set-result").html(html1);
  };
  //
  //跳转任务管理
  $(".tm").click(function(){
    $iframe.attr("src","./atm.html");
  })
  //提示1.5s文字消失
  function clear(){
    setTimeout(function(){
      $(".alert").css("display","none");
    },3500)
  }

  guolv();
  //用户
  function user(){
    let html2="";
    for(let a=0;a<planmsg.account.length;a++){
      html2+=
      `<li>
        <span data-user="${planmsg.account[a].user}">账号：${planmsg.account[a].user}</span>
        <span>，</span>
        <span data-pass="${planmsg.account[a].pass}">密码：${planmsg.account[a].pass}</span>
        <i class="iconfont icon-chahao" data-type="account"></i>
      </li>`
      $(".user-result").html(html2);
    }
  }
  user();
  //新增采集
  $(".add-more .add").click(function(){
    let bookname=$(".book-name input").val();
    let people=$(".book-zz input").val();
    let link=$(".add-link textarea").val();
    let filename=$('.add-more input').val();
    if(filename){
      var fd = new FormData();
      fd.append("file", document.getElementById('files').files[0]);
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", uploadComplete, false);
      xhr.addEventListener("error", uploadFailed, false);
      xhr.addEventListener("abort", uploadCanceled, false);
      xhr.open("POST", "http://zhuishu.zhiask.cn/upload");//修改成自己的接口
      xhr.send(fd);
      function uploadComplete(evt) {
        /* 服务器端返回响应时候触发event事件*/
        alert(evt.target.responseText);
        sessionStorage.setItem("fileid",evt.target.responseText)
      }
      function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.");
      }
      function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
      }
    }else{
      $.ajax({
        url:"http://zhuishu.zhiask.cn/api",
        type:"post",
        headers: { 
          "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
          "Access-Token":token
        }, 
        contentType: "text/html;charset=utf-8",
        processData: false, // 不处理数据
        data:JSON.stringify({
          "action": "add_crawler",
          "data": {
              "id": planmsg.id,
              "title":bookname ,
              "author":people,
              "link": link,
              "filename":filename
          }
        }),
        dataType: "json",
        success: function(res) {
          if(res.errcode==0){
            console.log(res);
            console.log($(".alert"))
            $(".alert").html("新增成功")
            $(".alert").css("display","block");
            clear()
          }else{
            $(".alert").html(res.errmsg)
            $(".alert").css("display","block");
            clear()
          }
        }
      })
    } 
    
  })
  //清空采集
  $(".add-more .remove").click(function(){
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        "action": "cls_crawler",
        "data": {
            "id": planmsg.id,
        }
      }),
      dataType: "json",
      success: function(res) {
        if(res.errcode==0){
          console.log(res)
          $(".alert").html("清空成功")
          $(".alert").css("display","block");
          clear()
        }else{
          $(".alert").html(res.errmsg)
          $(".alert").css("display","block");
          clear()
        }
      }
    })
  })
  //测试采集
  $(".right .test").click(function(){
    $iframe.attr("src","./test-collection.html")
  })
  //采集清单
  $(".right .cl").click(function(){
    $iframe.attr("src","./collection-list.html")
  })
  //删除用户
  function del(){
    let i=$(".set i");
    i.each(function(index, value){
      $(this).click(function(){
        let t=$(this).attr("data-type");
        console.log(t);
        if(t=="account"){
          planmsg.account.splice(index,1);
        }else{
          planmsg.filter.splice(index,1);        }
        $(this).parent().css("display","none")
      })
    })
  }
  del();
  //添加账号
  $(".user .btn").click(function(){
    let username=$(".username").val();
    let upwd=$(".upwd").val();
    if(username==""){
      alert("用户名不能为空");
      return;
    }
    if(upwd==""){
      alert("密码不能为空");
      return;
    };
    let obj={
      "user": username,
      "pass": upwd
    }
    planmsg.account=planmsg.account.concat(obj);
    user();
   del();
  })
  //添加获取
  $(".set-zi .btn").click(function(){
    let be=$(".beforeContent").val();
    let now=$(".nowContent").val();
    if(be==""){
      alert("用户名不能为空");
      return;
    }
    if(now==""){
      alert("密码不能为空");
      return;
    }
    let obj={
      "pattern": be,
      "replace": now
    }
    planmsg.filter=planmsg.filter.concat(obj);
    guolv();
   del();
  })
  //提交设置更改
  $(".sub").click(function(){
    let name=$(".plan-name input").val();
    let time=$(".time").val();
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "mod_crawler",
        data: {
          "id":planmsg.id,
          "name": name,
          "filter":planmsg.filter,
          "interval":time*1000,
          "account":planmsg.account
        }
      }),
      dataType: "json",
      success: function(res) {
        if(res.errcode==0){
          console.log(res)
          $(".alert").html("修改成功")
          $(".alert").css("display","block");
          clear()
        }else{
          $(".alert").html(res.errmsg)
          $(".alert").css("display","block");
          clear()
        }
      }
    })
  })
})()