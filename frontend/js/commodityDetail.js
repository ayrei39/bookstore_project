var urlParams = new URLSearchParams(window.location.search);
var book_id = urlParams.get("book_id");

fetch(backend + "/bookPic/getBookPic?book_id=" + book_id)
    .then(resp => resp.json())
    .then(content => content.data)
    .then(data => {
        document.getElementById("bookName").innerText = data.book.bookName;
        document.getElementById("bookDescription").innerText = data.book.bookDescription;
        document.getElementById("bookPic").src =  ".." + data.book.bookPicture;
        var bookPic=".." + data.book.bookPicture;
        document.getElementById("bookBigPic").src = ".." + data.book.bookPicture;
        let bookPrice = data.book.bookPrice;
        document.getElementById("bookPrice").innerText = bookPrice;
        document.getElementById("originalBookPrice").innerText = "原价" + (bookPrice * 1.15).toFixed(1);
        document.getElementById("eBookPrice").innerText = (bookPrice * 0.6).toFixed(1);
        document.getElementById("bookpic_1").src = ".."+data.bp[0].bookPicture;
        document.getElementById("bookpic_2").src = ".."+data.bp[1].bookPicture;
        document.getElementById("bookpic_3").src = ".."+data.bp[2].bookPicture;
        document.getElementById("bookpic_4").src = ".."+data.bp[3].bookPicture;
    })

window.addEventListener('load', function () {
    // 放大镜效果
    var commodityltop = document.querySelector('.commodityltop');
    var mask = document.querySelector('.commodityltopmask');
    var big = document.querySelector('.commodityltopBig');
    var bigIMg = document.querySelector('.commodityltopBigImg');
    // 1. 当我们鼠标经过 commodityltop 就显示和隐藏 mask 遮挡层 和 big 大盒子
    commodityltop.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    commodityltop.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    commodityltop.addEventListener('mousemove', function (e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = commodityltop.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
    bookpic_1.addEventListener("mouseover",function(e){
        var now=this.src;
        document.getElementById("bookPic").src = now;
        document.getElementById("bookBigPic").src = now;
    })
    bookpic_2.addEventListener("mouseover",function(e){
        var now=this.src;
        document.getElementById("bookPic").src = now;
        document.getElementById("bookBigPic").src = now;
    })
    bookpic_3.addEventListener("mouseover",function(e){
        var now=this.src;
        document.getElementById("bookPic").src = now;
        document.getElementById("bookBigPic").src = now;
    })
    bookpic_4.addEventListener("mouseover",function(e){
        var now=this.src;
        document.getElementById("bookPic").src = now;
        document.getElementById("bookBigPic").src = now;
    })
})

