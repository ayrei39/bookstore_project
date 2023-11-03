window.addEventListener('load', function () {
    // //这边将address显示地理位置
    // var addressf = document.querySelector('.addressf');
    // var addresssul = document.querySelector('.addresssul');
    // var addresssullist = addresssul.children;
    // addressf.onmouseover = function () {
    //     addresssul.style.display = 'block';
    // }
    // addressf.onmouseout = function () {
    //     addresssul.style.display = 'none';
    // }
    // for (var i = 0; i < addresssullist.length; i++) {
    //     //console.log(addresssullist[i].children[0].innerHTML);
    //     addresssullist[i].onclick = function () {
    //         addressf.children[0].innerHTML = "送至：" + this.innerHTML;
    //     }
    // }

    // 显示我的当当下拉
    var pagelidd = document.querySelector('.pagelidd');
    var pageddul = document.querySelector('.pageddul');
    var pageliddimg = document.querySelector('.pageliddimg');
    pagelidd.onmouseover = function () {
        pageddul.style.display = 'block';
        pageliddimg.style.display = 'none';
    }
    pagelidd.onmouseout = function () {
        pageddul.style.display = 'none';
        pageliddimg.style.display = 'block';
    }
    // 企业采购
    var pagelicg = document.querySelector('.pagelicg');
    var pagecgul = document.querySelector('.pagecgul');
    var pagelicgimg = document.querySelector('.pagelicgimg');
    pagelicg.onmouseover = function () {
        pagecgul.style.display = 'block';
        pagelicgimg.style.display = 'none';
    }
    pagelicg.onmouseout = function () {
        pagecgul.style.display = 'none';
        pagelicgimg.style.display = 'block';
    }
    // 购物车变色
    var navrightgwa = document.querySelector('.navrightgwa');
    var navrightgwache = document.querySelector('.navrightgwache');

    navrightgwa.onmouseover = function () {
        navrightgwache.src = '../img/gouwuchered.png';
    }
    navrightgwa.onmouseout = function () {
        navrightgwache.src = '../img/gouwuchewheat.png';
    }

    // 内容左边列表变色放大
    var consent_topleftul = document.querySelector('.consent_topleftul');
    var consent_topleftullist = consent_topleftul.children;
    // console.log(consent_topleftullist);
    for (var i = 0; i < consent_topleftullist.length; i++) {
        consent_topleftullist[i].onmouseover = function () {
            // console.log(this.childNodes[0].childNodes[0].innerHTML);
            this.childNodes[0].childNodes[0].style.color = "rgb(255, 40, 50)";
            this.childNodes[0].childNodes[0].style.fontSize = 20 + "px";
            this.style.backgroundColor = "rgb(255, 255, 255)";
            // console.log(this.childNodes[0].childNodes[0].style.fontSize);
        }
        consent_topleftullist[i].onmouseout = function () {
            // console.log(this.childNodes[0].childNodes[0].innerHTML);
            this.childNodes[0].childNodes[0].style.color = "rgb(50,50,50)";
            this.childNodes[0].childNodes[0].style.fontSize = 16 + "px";
            this.style.backgroundColor = "rgb(250,250,250)";
        }
    }

    function GetImgName(path) {
        var filename;
        if (path.indexOf("/") > 0)//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
        {
            filename = path.substring(path.lastIndexOf("/") + 1, path.length);
        }
        else {
            filename = path;
        }
        return filename;
    }

//全部商品分类显示对应内容
$(function () {
    // 1.点击右边的li，当前li 添加current类，其余兄弟移除类
    $(".consent_topleftul li").mouseover(function () {
        //console.log(111);
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
            //console.log($(".consent_topleftuldv .item").eq(index));
        $(".consent_topleftuldvitem").eq(index).show().siblings().hide();
        var consent_topleftuldvitemul = $(".consent_topleftuldvitem").eq(index);
        var consent_topleftuldvitemullist = consent_topleftuldvitemul.find("ul>li");
        for (var i = 0; i < consent_topleftuldvitemullist.length; i++) {
            var bookname = decodeURI(GetImgName(consent_topleftuldvitemullist[i].children[0].children[0].src));
            // console.log(bookname);
            // console.log(consent_topleftuldvitemullist[i].children[0].children[1].innerHTML);
            // console.log(bookname.slice(0, bookname.lastIndexOf('.jpg')));
            bookname = bookname.slice(0, bookname.lastIndexOf('.jpg'));
            consent_topleftuldvitemullist[i].children[0].children[1].innerHTML = bookname;
        }
    });
})
function GetImgName(path) {
    var filename;
    if (path.indexOf("/") > 0)//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
    {
        filename = path.substring(path.lastIndexOf("/") + 1, path.length);
    }
    else {
        filename = path;
    }
    return filename;
}

    // 轮播图
    // 1. 获取元素
    var arrowl = document.querySelector('.arrowl');
    var arrowr = document.querySelector('.arrowr');
    var consent_topmid1 = document.querySelector('.consent_topmid1');
    var consent_topmid1With = consent_topmid1.offsetWidth;
    // 2. 鼠标经过consent_topmid1 就显示隐藏左右按钮
    consent_topmid1.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    consent_topmid1.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrowr.click();
        }, 2000);
    });
    // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
    var consent_topmid1ul = consent_topmid1.querySelector('.consent_topmid1ul');
    var consent_topmid1ol = consent_topmid1.querySelector('.consent_topmid1ol');
    // console.log(consent_topmid1ul.children.length);
    for (var i = 0; i < consent_topmid1ul.children.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        consent_topmid1ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < consent_topmid1ol.children.length; i++) {
                consent_topmid1ol.children[i].className = '';
            }
            // console.log(this);
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 consent_topmid1ol  
            circle = index;
            // num = circle = index;
            // console.log(consent_topmid1With);
            // console.log(index);
            animate(consent_topmid1ul, -index * consent_topmid1With);
        })
    }
    // 把ol里面的第一个小li设置类名为 current
    consent_topmid1ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面
    var first = consent_topmid1ul.children[0].cloneNode(true);
    consent_topmid1ul.appendChild(first);
    // 7. 点击右侧按钮， 图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == consent_topmid1ul.children.length - 1) {
                consent_topmid1ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(consent_topmid1ul, -num * consent_topmid1With, function () {
                flag = true; // 打开节流阀
            });
            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // console.log("==========================");
            // console.log(circle);
            // console.log(consent_topmid1ol.children.length);
            // console.log("==========================");
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == consent_topmid1ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });
    // 9. 左侧按钮做法
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = consent_topmid1ul.children.length - 1;
                consent_topmid1ul.style.left = -num * consent_topmid1With + 'px';
            }
            num--;
            animate(consent_topmid1ul, -num * consent_topmid1With, function () {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            circle = circle < 0 ? consent_topmid1ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < consent_topmid1ol.children.length; i++) {
            consent_topmid1ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        consent_topmid1ol.children[circle].className = 'current';
    }
    // 10. 自动播放轮播图
    var timer = setInterval(function () {
        //手动调用点击事件
        arrowr.click();
    }, 2000);






});

function todeatil(ta){
    console.log(ta);
    $(function(){
        $.ajax({
            url: backend + "/book/getbookId",
            type: "get",
            //将json转为string格式发送
            data : {bookname: ta.children[1].innerHTML},
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
window.onload=function(){
    // var admin1  = document.getElementById('admin')
    if(!sessionStorage.getItem('admin')){
        
    }else{
        document.getElementById("page_login").innerHTML="欢迎"+ "<a class=\"pageullireg\">"+sessionStorage.getItem('admin')+"</a>";
      
    }
}