var table = document.getElementById('shopping');
var checkAll = document.getElementById('checkAll');
var options = document.getElementsByName('option');
var userId = localStorage.getItem('userId'); 

//头部显示地理位置和下拉框
window.addEventListener('load', function () {

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
});

// 加载购物车商品
fetch(backend + "/shoppingcart/getshopcar?userId=" + userId)
    .then(resp => resp.json())
    .then(content => {
        let data = content.data;
        for (let i = 0; i < data.length; i++) {
            table.insertRow(1).insertCell(0).colspan = 7;
            tr = table.insertRow(2);
            tr.insertCell(0).innerHTML = '<input type="checkbox" name="option">'
            tr.insertCell(1).innerHTML = '<dl><dt><img src=..' + data[i].book.bookPicture + ' width="40px" height="40px"></dt><dd><p><a href="#">' + data[i].book.bookName + '</a></p></dd></dl>';
            tr.insertCell(2).innerHTML = data[i].book.bookPrice;
            tr.insertCell(3).innerHTML = '<input type="button" value="-" onclick="sub(this)" style="width:60px">\
                                        <input type="text" name="count" value=" ' + data[i].num + ' " size="4" readonly="readonly">\
                                        <input type="button" value="+" onclick="add(this)"  style="width:60px">';
            tr.insertCell(4).innerHTML = '<span>' + (data[i].book.bookPrice * data[i].num).toFixed(2) + '</span>';
            tr.insertCell(5).innerHTML = '<input type="button" value="删除">';
            tr.insertCell(6).innerHTML = '<span hidden>' + data[i].book.bookId + '</span>';
        }
        // 绑定全选和单项选择事件
        checkAll.onclick = selectAll;
        for (let i = 0; i < options.length; i++) {
            options[i].onclick = reCheck;
        }
        // 绑定删除按钮触发事件
        for (let i = 2; i < table.rows.length; i += 2) {
            let delBtn = table.rows[i].cells[5].children[0];
            delBtn.onclick = function () {
                let tr = delBtn.parentNode.parentNode;
                let bookId = tr.cells[6].children[0].innerText;
                updateItem(bookId, 0);
                tr.parentNode.removeChild(tr.previousElementSibling)
                tr.parentNode.removeChild(tr)
                summerize();
                reCheck();
            }
        }
        checkAll.checked = true;
        selectAll();
    });

// 计算总价格
function summerize() {
    let totalPrice = 0;
    for (let i = 2; i < table.rows.length; i += 2) {
        let option = table.rows[i].cells[0].children[0];
        if (option.checked) {
            totalPrice += Number(table.rows[i].cells[4].children[0].innerHTML);
        }
    }
    document.getElementById("total").innerHTML = totalPrice.toFixed(2);
}

// 计算单组商品的价格
function summerizeSingle() {
    for (let i = 2; i < table.rows.length; i += 2) {
        table.rows[i].cells[4].children[0].innerHTML = (table.rows[i].cells[2].innerHTML * table.rows[i].cells[3].children[1].value).toFixed(2);
    }
}

//全选
function selectAll() {
    for (let i = 2; i < table.rows.length; i += 2) {
        let option = table.rows[i].cells[0].children[0];
        option.checked = checkAll.checked;
    }
    summerize();
}

//反选
function reCheck() {
    let allChecked = true;
    for (let i = 0; i < options.length; i++) {
        if (!options[i].checked) {
            allChecked = false;
            break;
        }
    }
    if (allChecked) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }
    summerize();
}

//减少商品数量
function sub(btn) {
    let num = btn.nextElementSibling;
    num.value--;
    if (num.value < 0) {
        num.value = 0;
    }
    summerizeSingle();
    summerize();
    let tr = btn.parentNode.parentNode;
    let bookId = tr.cells[6].children[0].innerText;
    updateItem(bookId, num.value);

}

// 增加商品数量
function add(btn) {
    let num = btn.previousElementSibling;
    num.value++;
    summerizeSingle();
    summerize();
    let tr = btn.parentNode.parentNode;
    let bookId = tr.cells[6].children[0].innerText;
    updateItem(bookId, num.value);
}

//删除选中的
function deleteChecked() {
    for (let i = table.rows.length - 1; i > 0; i -= 2) {
        let option = table.rows[i].cells[0].children[0];
        if (option.checked) {
            let tr = option.parentNode.parentNode;
            let bookId = tr.cells[6].children[0].innerText;
            updateItem(bookId, 0);
            tr.parentNode.removeChild(tr.previousElementSibling);
            tr.parentNode.removeChild(tr);
            summerize();
            reCheck();
        }
    }
}

function getInfo(row) {
    // 获取书名（第二列）
    let bookName = row.cells[1].querySelector('a').innerText;

    // 获取数量（第四列）
    let num = parseInt(row.cells[3].querySelector('input[name="count"]').value);

    // 获取价格（第三列）
    let bookPrice = parseFloat(row.cells[4].innerText);

    let option = row.cells[0].children[0];

    console.log("书名: " +typeof bookName);
    console.log("数量: " +typeof num);
    console.log("价格: " +typeof bookPrice);

    if (option.checked) {
        $( function () {
                $.ajax( {
                    url: backend + "/order/add",
                    type: "post",
                    data: {
                        bookName: bookName,
                        userId: userId,
                        nums: num,
                        cost: bookPrice,
                    },
                    success(resp) {
                        console.log(resp);
                    },
                    error(resp) {
                        console.log(resp);
                    }
                });
            }

        )
    }

}


// 下单
function buyAll() {

    for (let i = 2; i < table.rows.length ; i += 2) {
        getInfo(table.rows[i]);
        console.log(i);
    }
    deleteChecked();
    // console.log(table.rows.length);
}

// 更新购物车单份商品到后台
function updateItem(bookId, num) {
    fetch(backend + "/shoppingcart/updateShopCar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": userId,
            "bookId": bookId,
            "num": num
        })
    });
}