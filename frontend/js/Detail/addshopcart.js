function updateItem(bookId) {

    fetch(backend + "/shoppingcart/getBookNum", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": localStorage.getItem("userId"),
            "bookId": bookId,
        })
    })
        .then(resp => resp.json())
        .then(content => content.data)
        .then(data => {
            let num = 0;
            if (data != null) {
                num = data.num + 1;
            } else {
                num = 1;
            }

            // console.log(num);

            fetch(backend + "/shoppingcart/updateShopCar", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "userId": localStorage.getItem("userId"),
                    "bookId": bookId,
                    "num": num
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data.ok);
                    // 接下来的处理逻辑
                    if(data.ok === true)
                        layer.msg("加入购物车成功!", {
                            icon: 1,
                            time: 2000
                        },function () {
                        });
                });


        });


    // .then(resp => resp.json())
    // .then(content => content.data)
    // .then(data => {
    //     console.log(data)
    //     console.log(data.ok)
    //     if (data === true || data.ok === true)
    //     // if(data.ok === true)
    //         layer.msg("加入购物车成功！", {
    //             icon: 1,
    //         time: 2000 //2秒关闭（如果不配置，默认是3秒）
    //         }, function(){
    //     });
    // });

    //
    // console.log(localStorage.getItem("userId"))
    // console.log(bookId)


}