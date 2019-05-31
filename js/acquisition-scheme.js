(function(){
  let token=sessionStorage.getItem("token");
  let topWindow = $(window.parent.document);
  let $iframe = topWindow.find('#right>iframe');
  let $plan=$(".acquisition-scheme .programme");
  //获取方案
  $.ajax({
    url:"http://zhuishu.zhiask.cn/api",
    type:"post",
    headers: { 
      "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
      "Access-Token":token
    }, 
    contentType: "text/html;charset=utf-8",
    data:JSON.stringify({
      action: "list_crawler",
      data: {
      }
    }),
    dataType: "json",
    success: function(res) {
      let html="";
      for(let a=0;a<res.data.length;a++){
        html+=`<div class="item" data-index="${a}" data-id="${res.data[a].id}">${res.data[a].name}</div>`
      }
      $plan.html(html);
      cplan(res.data);
    }
  })
  //点击方案
  function cplan(data){
    let plandata=data;
    let $task=$(".acquisition-scheme .programme div");
    $task.each(function(){
      $(this).click(function(){
        let id=$(this).attr("data-id");
        let index=$(this).attr("data-index");
        sessionStorage.setItem("planmsg",JSON.stringify(plandata[index]));
        sessionStorage.setItem("taskid",id);
        $iframe.attr("src","./task-management.html")
      })
    })
  } 
})()