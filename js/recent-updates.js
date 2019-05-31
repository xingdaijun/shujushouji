(function(){
  let pageNum=1;//当前页码
  let pageCount=1000/10//数据总数
  let pageSize=10//每页数据数量
  let token=sessionStorage.getItem("token");
  let topWindow = $(window.parent.document);
  let source="";
  console.log(topWindow)
  let $iframe = topWindow.find('#right>iframe');
  let $select1=$(".recent-updates .laiyuan select")
  let $select2=$(".recent-updates .fenye select")
  //切换来源获取书籍
  $select1.change(function(){
    source= $(this).children('option:selected').val(); 
    console.log(source);
    getbook(source,pageNum,pageSize);
  })
  $select2.change(function(){
    pageSize=$(this).children('option:selected').val(); 

    getbook(source,pageNum,pageSize);
    console.log(pageSize);
  })
  //获取书籍函数
  function getbook(source,pageNum,pageSize){
    console.log(pageSize)
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "list_book",
        data: {
          action: "list_book",
          data: {
              "page": pageNum,
              "num": pageSize,
              "source":source
          }
        }
      }),
      dataType: "json",
      success: function(res) {
        console.log(res.data);
        if(res.data.length==0){
          $(".msg").html("最近没有更新")
          $(".msg").css("display","block")
          return;
        }
        let $table=$(".recent-updates table tbody");
        $table.html("");
        let html="";
        for(let a=0;a<res.data.length;a++){
          html+=`
          <tr>
            <td class="num">${a+1}</td>
            <td class="book-name">
              <div class="book-img">
                <img src=${res.data[a].image} alt="">
              </div>
              <span>${res.data[a].title}</span>
            </td>
            <td class="author">${res.data[a].author}</td>
            <td class="source">${res.data[a].source}</td>
            <td class="update-time">${res.data[a].update_time}</td>
            <td class="latest-chapters">${res.data[a].recent_chapter}</td>
          </tr>
          `
        }
        $table.html(html);
      }
    })
  }
  //获取最近更新书籍
  window.onload=getbook();
  //根据采集方案获取源
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
      let html="<option value=''>全部</option>";
      for(let a=0;a<res.data.length;a++){
        html+=`<option value="${res.data[a].source}">${res.data[a].source}</option>`
      }
      $select1.html(html);
    }
  })
  //返回按钮
  $back=$(".recent-updates .top .back-btn");
  $back.click(function(){
    history.go(-1);
  })
  //分页
  
  //点击上一页
  $(".prev").click(function(){
    $pageItem=$(".page-item")
    if(pageNum==1){
      alert("到顶了");
      return;
    }
    pageNum=pageNum-1
    console.log(pageNum);
    if(pageNum>5){
      console.log(pageNum)
      let html=`
      <div class="page-item" data-num="${pageNum-5}">${pageNum-5}</div>
      <div class="page-item" data-num="${pageNum-4}">${pageNum-4}</div>
      <div class="page-item" data-num="${pageNum-3}">${pageNum-3}</div>
      <div class="page-item" data-num="${pageNum-5}">${pageNum-2}</div>
      <div class="page-item" data-num="${pageNum-1}">${pageNum-1}</div>
      <div class="page-item active" data-num="${pageNum}" >${pageNum}</div>
      `;
      $(".page").html(html)
    }else{
      $("[class~=active]").removeClass("active")
    .prev().addClass("active"); 
    }
    getbook(source,pageNum,pageSize);
  })
  //点击下一页
  $(".next").click(function(){
    $pageItem=$(".page-item")
    if(pageNum==pageCount){
      alert("到顶了");
      return;
    }
    pageNum=pageNum+1;
    if(pageNum>6){
      console.log(pageNum)
      let html=`
      <div class="page-item" data-num="${pageNum-5}">${pageNum-5}</div>
      <div class="page-item" data-num="${pageNum-4}">${pageNum-4}</div>
      <div class="page-item" data-num="${pageNum-3}">${pageNum-3}</div>
      <div class="page-item" data-num="${pageNum-5}">${pageNum-2}</div>
      <div class="page-item" data-num="${pageNum-1}">${pageNum-1}</div>
      <div class="page-item active" data-num="${pageNum}" >${pageNum}</div>
      `;
      $(".page").html(html)
    }else{
      $("[class~=active]").removeClass("active")
    .next().addClass("active");
    }
    getbook(source,pageNum,pageSize);
  })
  //点击
  $(".page").on("click",".page-item",function(event){
    console.log($(event.target));
    let e=$(event.target);
    let num=e.attr("data-num");
    e.addClass("active")
    .siblings().removeClass("active");
    pageNum=parseInt(num);
    console.log(pageNum);
    getbook(source,pageNum,pageSize);
  })
})()