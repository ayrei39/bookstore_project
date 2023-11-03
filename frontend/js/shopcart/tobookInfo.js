function todeatil(ta){
    console.log(ta);
    $(function(){
        $.ajax({
            url: backend + "/book/getbookId",
            type: "get",
            //将json转为string格式发送
            data : {bookname: ta.children[0].innerHTML},
            dataType: "json",
            contentType : "application/string",
                success:function(data){
                    console.log(data);
                    //将userId保存在本地
                    if(data.ok==false) {
                        layer.msg(data.message, {
                            icon: 2,
                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
                          }, function(){
                          }); 
                    }
                    else {
                        window.location.assign('commodityDetail.html?book_id='+data.data);
                    }
                }
        })
    })
}