(function(){
  let pageNUm=1;
  let token=sessionStorage.getItem("token");
  //跳转详情
  let topWindow = $(window.parent.document);
  let $iframe = topWindow.find('#right>iframe');
  function gettr(){
    let $tr=$(".search-result table tbody tr");
    console.log($tr);
    $tr.each(function(index){
      $(this).click(function(){
        console.log(index);
        $iframe.attr("src","./book-details.html");
      })
    })
  };
  //搜索书籍
  $(".search-box").click(function(){
    let bookname=$(".top input").val();
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "search_book",
        data: {
            "keywords": bookname,
        }
      }),
      dataType: "json",
      success: function(res) {
        console.log(res);
        if(res.data.length==0){
          $(".msg").css("display","block")
          return;
        }
        let $table=$(".search-result table tbody");
        $table.html("");
        let html="";
        for(let a=0;a<res.data.length;a++){
          html+=`
          <tr>
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
        gettr();
      }
    })
  })
  //最近更新
  $(".recent-updates").click(function(){
    $iframe.attr("src","./recent-updates.html");
  })
})()