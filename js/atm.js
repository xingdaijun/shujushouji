(function(){
  let token=sessionStorage.getItem("token");
  let id=sessionStorage.getItem("taskid")
  let topWindow = $(window.parent.document);
  console.log(topWindow)
  let $iframe = topWindow.find('#right>iframe');
  //获取采集任务
  $.ajax({
    url:"http://zhuishu.zhiask.cn/api",
    type:"post",
    headers: { 
      "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
      "Access-Token":token
    }, 
    contentType: "text/html;charset=utf-8",
    data:JSON.stringify({
      action: "list_task",
      data: {
          "id": id,
          "page": 1,
          "num": 10
      }
    }),
    dataType: "json",
    success: function(res) {
      console.log(res);
    }
  })
  //监听点击查看
  $(".cz").on("click",".see",function(event){
    window.open("./task-detail.html")
  })
})()