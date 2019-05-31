(function(){
  let token=sessionStorage.getItem("token");
  let topWindow = $(window.parent.document);
  let pageNum=1;
  let pageSize=10;
  console.log(topWindow)
  let $iframe = topWindow.find('#right>iframe');
  //获取错误日志
  $.ajax({
    url:"http://zhuishu.zhiask.cn/api",
    type:"post",
    headers: { 
      "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
      "Access-Token":token
    }, 
    contentType: "text/html;charset=utf-8",
    data:JSON.stringify({
      action: "list_logging",
        data: {
            "page": 1,
            "num": 10
        }
    }),
    dataType: "json",
    success: function(res) {
      console.log(res);
      res={
        "errcode": 0,
        "errmsg": "success",
        "data": [
            {
                "id": 1,
                "title": "史上最强炼气期",
                "chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "event_time": "2019-05-13 22:20:42",
                "desc": "网络超时",
                "status": 1
            }
        ]
      }
      let html="";
      console.log(res.data)
      for(let a=0;a<res.data.length;a++){
        html+=`
          <tr>
          <td class="num">${a+1}</td>
          <td class="name">${res.data[a].title}</td>
          <td class="zhang">${res.data[a].chapter}</td>
          <td class="time">${res.data[a].event_time}</td>
          <td class="describe">${res.data[a].desc}</td>
          <td class="type">未处理</td>
          <td class="operation">
            <div class="see">查看</div>
            <div class="yichuli" data-id="${res.data[a].id}" style="display:${res.data[a].status==0 ?'none':'inline-block'}">已处理</div>
          </td>
        </tr>
        `
      }
      $("table tbody").html(html);
      //点击已处理
      $(".yichuli").each(function(){
        console.log($(this))
        $(this).click(function(){
          let errorid=$(this).attr("data-id");
          $.ajax({
            url:"http://zhuishu.zhiask.cn/api",
            type:"post",
            headers: { 
              "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
              "Access-Token":token
            }, 
            contentType: "text/html;charset=utf-8",
            data:JSON.stringify({
              action: "mod_logging",
              data: {
                  "id": errorid
              }
            }),
            dataType: "json",
            success: function(res) {
              console.log(res);
              if(res.errcode==0){
                window.location.reload();
                $iframe.attr("src","./error-log.html");
              }
            }
          })
        })
      })
    }
  })
  //搜索日志
  $(".search").click(function(){
    let type=$("#type option:selected").val();
    let status=$("#status option:selected").val();
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "search_logging",
          data: {
              "type": type,
              "status": status,
              "page": pageNum,
              "num": pageSize
          }
      }),
      dataType: "json",
      success(res){
        console.log(res);
        if(res.data.length!=0){
          for(let a=0;a<res.data.length;a++){
            html+=`
              <tr>
              <td class="num">${a+1}</td>
              <td class="name">${res.data[a].title}</td>
              <td class="zhang">${res.data[a].chapter}</td>
              <td class="time">${res.data[a].event_time}</td>
              <td class="describe">${res.data[a].desc}</td>
              <td class="type">未处理</td>
              <td class="operation">
                <div class="see">查看</div>
                <div class="yichuli" data-id="${res.data[a].id}" style="display:${res.data[a].status==0 ?'none':'inline-block'}">已处理</div>
              </td>
            </tr>
            `
          }
          $("table tbody").html(html);
        }else{
          $(".nomsg").css("display","block");
        }
      }
    })
  })
})()