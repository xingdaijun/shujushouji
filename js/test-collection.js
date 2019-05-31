(function(){
  let token=sessionStorage.getItem("token");
  let topWindow = $(window.parent.document);
  console.log(topWindow)
  let $iframe = topWindow.find('#right>iframe');

  //返回
  $(".back").click(function(){
    history.go(-1);
  })
  //测试采集
  $(".link .btn").click(function(){
    let $link=$(".link input").val();
    console.log($link);
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "test_crawler",
        data: {
            "id": 1,
            "link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d"
        }
      }),
      dataType: "json",
      success: function(res) {
        console.log(res,123);
        if(res.data.length!=0){
          let html="";
          for(a=0;a<res.data.length;a++){
            html+=`
            <tr>
              <td class="name">${res.data[a].title}</td>
              <td>作者：${res.data[a].author}</td>
              <td>采集了120章</td>
              <td>查看</td>
            </tr>`
          }
          $("table tbody").html(html)
        }else{
          $(".nomsg").css("display","block");
        }

      }
    })
  })
})()