(function(){
  let token=sessionStorage.getItem("token");
  //返回
  $(".back").click(function(){
    history.go(-1);
  })
  //跳转详情
  let topWindow = $(window.parent.document);
  console.log(topWindow)
  let $iframe = topWindow.find('#right>iframe');
  //搜索采集
  $(".search-btn").click(function(){
    let bookname=$(".search input").val();
    console.log(bookname);
    $.ajax({
      url:"http://zhuishu.zhiask.cn/api",
      type:"post",
      headers: { 
        "Content-Type": "application/json" , //multipart/form-data;boundary=--xxxxxxx   application/json
        "Access-Token":token
      }, 
      contentType: "text/html;charset=utf-8",
      data:JSON.stringify({
        action: "search_crawling",
        data: {
            "keywords":bookname,
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
                "author": "李道然",
                "source": "shenqi",
                "update_time": "2019-05-13 22:20:42",
                "recent_chapter": "[39分钟前更新]  全部章节 第二百九十章 报复！",
                "image": "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3377379%2F3377379_41e9e94e75bb41f7bfd67acf9e84a771.jpg%2F",
                "type": "玄幻",
                "intro": "修炼了将近五千年的方羽，还是没有突破炼气期…… “我真的只有炼气期，但你们别惹我！”",
                "flag": 0,
                "catalog_link": "http://m.zhuishushenqi.com/book/5cc7e47f8b00666629491f2d/chapter"
            }
          ]
        }
        let html="";
        console.log($("table tbody"),132)
        for(a=0;a<res.data.length;a++){
          html+=`
          <tr>
          <td class="book-name">
            <div class="book-img">
              <img src="${res.data[a].image}" alt="">
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
        $("table tbody").html(html);
      }
    })
  })
  //跳转测试采集
  $(".head .btn").click(function(){
    console.log(132);
    $iframe.attr("src","./test-collection.html")
  })
})()