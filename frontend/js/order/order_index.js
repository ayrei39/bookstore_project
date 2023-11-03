window.addEventListener('load', function () {


    // 显示我的当当下拉
    let pagelidd = document.querySelector('.pagelidd');
    let pageddul = document.querySelector('.pageddul');
    let pageliddimg = document.querySelector('.pageliddimg');
    pagelidd.onmouseover = function () {
        pageddul.style.display = 'block';
        pageliddimg.style.display = 'none';
    }
    pagelidd.onmouseout = function () {
        pageddul.style.display = 'none';
        pageliddimg.style.display = 'block';
    }
    // 企业采购
    let pagelicg = document.querySelector('.pagelicg');
    let pagecgul = document.querySelector('.pagecgul');
    let pagelicgimg = document.querySelector('.pagelicgimg');
    pagelicg.onmouseover = function () {
        pagecgul.style.display = 'block';
        pagelicgimg.style.display = 'none';
    }
    pagelicg.onmouseout = function () {
        pagecgul.style.display = 'none';
        pagelicgimg.style.display = 'block';
    }
    // 购物车变色
    let navrightgwa = document.querySelector('.navrightgwa');
    let navrightgwache = document.querySelector('.navrightgwache');

    navrightgwa.onmouseover = function () {
        navrightgwache.src = '../img/gouwuchered.png';
    }
    navrightgwa.onmouseout = function () {
        navrightgwache.src = '../img/gouwuchewheat.png';
    }



    function GetImgName(path) {
        let filename;
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
        let index = $(this).index();
        // console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
            //console.log($(".consent_topleftuldv .item").eq(index));
        $(".consent_topleftuldvitem").eq(index).show().siblings().hide();
        let consent_topleftuldvitemul = $(".consent_topleftuldvitem").eq(index);
        let consent_topleftuldvitemullist = consent_topleftuldvitemul.find("ul>li");
        for (let i = 0; i < consent_topleftuldvitemullist.length; i++) {
            let bookname = decodeURI(GetImgName(consent_topleftuldvitemullist[i].children[0].children[0].src));
            // console.log(bookname);
            // console.log(consent_topleftuldvitemullist[i].children[0].children[1].innerHTML);
            // console.log(bookname.slice(0, bookname.lastIndexOf('.jpg')));
            bookname = bookname.slice(0, bookname.lastIndexOf('.jpg'));
            consent_topleftuldvitemullist[i].children[0].children[1].innerHTML = bookname;
        }
    });
})




window.onload=function(){
    // let admin1  = document.getElementById('admin')
    if(!sessionStorage.getItem('admin')){

    }else{
        document.getElementById("page_login").innerHTML="欢迎"+ "<a class=\"pageullireg\">"+sessionStorage.getItem('admin')+"</a>";

    }
}}