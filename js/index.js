
(function(){
  //禁止页面回退
  history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
  });
  //获取token，uname
  let uname=sessionStorage.getItem("name")
  $(".userName").html(uname);
  //退出登录
  $(".logout").click(function(){
    window.location.href="http://127.0.0.1:5500/login.html"
  })
  //修改密码
  $(".changeUpwd").click(function(){
    window.location.href="http://127.0.0.1:5500/change-password.html"
  })
  let $iframe=$("#right iframe");
  //书籍管理
  $(".left-list .book").click(function(){
    $iframe.attr("src","./book-management.html")
  })
  //方案管理
  $(".left-list .plan").click(function(){
    $iframe.attr("src","./acquisition-scheme.html");
  })
  //错误日志
  $(".left-list .error").click(function(){
    $iframe.attr("src","./error-log.html");
  })
})();