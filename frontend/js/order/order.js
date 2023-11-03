function showContent(index) {
    // 隐藏所有内容
    let contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // 显示选定的内容
    document.getElementById('content' + index).classList.add('active');
    // 移除所有选中状态
    let options = document.querySelectorAll('.sidenav .option');
    options.forEach(option => option.classList.remove('active'));

    // 添加选中状态
    options[index - 1].classList.add('active');
}

function populateTable_admin(orders) {
    // 获取表格的 tbody
    var tableBody = document.getElementById('order-table-body-2');

    // 遍历订单数据，逐行添加到表格中
    orders.forEach(function (order) {

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.userName}</td>
            <td>${order.bookName}</td>
            <td>${order.bookClass}</td>
            <td>${order.nums}</td>
            <td>${order.cost}</td>
            <td>${order.time}</td>
        `;
        tableBody.appendChild(row);
    });

}


document.addEventListener('DOMContentLoaded', function () {
    // 发起请求
    fetch(backend + "/sysController/checkPermissions", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": localStorage.getItem("userId"),
        })
    }) // 替换成你的后端接口地址
        .then(response => response.json())
        .then(data => {
            if (data === false) {
                // 如果返回值为 false，则隐藏选项2
                document.querySelector('.sidenav .option2').style.display = 'none';
                document.querySelector('.sidenav .option3').style.display = 'none';
            }
        })
        .catch(error => console.error('Error:', error));
});

function populateTable(orders) {
    // 获取表格的 tbody
    var tableBody = document.getElementById('order-table-body');

    // 遍历订单数据，逐行添加到表格中
    orders.forEach(function (order) {

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.bookName}</td>
            <td>${order.nums}</td>
            <td>${order.cost}</td>
            <td>${order.time}</td>
        `;
        tableBody.appendChild(row);
    });

}


document.addEventListener('DOMContentLoaded', function () {
    // 模拟后端返回的订单数据
    let orders;
    $(function () {
        $.ajax({
            url: backend + "/order/getlist",
            type: "get",
            data: {
                "userId": localStorage.getItem("userId"),
            },
            success(resp) {
                orders = resp;
                populateTable(orders);
            },
            error() {
                console.log("fail")
            }
        });
    })

});

document.addEventListener('DOMContentLoaded', function () {
    // 模拟后端返回的订单数据
    let orders;
    $(function () {
        $.ajax({
            url: backend + "/order/getall",
            type: "get",

            success(resp) {
                orders = resp;
                populateTable_admin(orders);
            },
            error() {
                console.log("fail")
            }
        });
    })

});