$(document).ready(function(){
    var url = window.location.href;
    var queryString = url.split('?')[1];
    var params = {};
    if (queryString) {
      queryString = queryString.split('#')[0]; //去除哈希值
      var pairs = queryString.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
      }
    }
    var bookname = params.bookName;
    console.log(bookname);
    $.ajax({
        url: backend+"/book/getbook",
        type: "get",
        data: {
           bookName:bookname
        },
        dataType: "json",
        success: function(data) {
           // console.log(data.data);
            const allBook = data.data;
            console.log(allBook);
            renderProductList(allBook);
        },
    });
    console.log(111)
});
// 渲染商品列表
function renderProductList(data) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    data.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product-item');
      productElement.innerHTML = `
        <img src="..${product.bookPicture}"  alt="商品图片">
        <h2>${product.bookName}</h2>
        <p>${product.bookDescription}</p>
        <p>￥${product.bookPrice}</p>
        <a onclick="todeatil(this)">查看详情<span hidden></span><span hidden>${product.bookName}</span></a>
      `;
      productList.appendChild(productElement);
    });
  }