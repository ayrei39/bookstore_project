function print(books) {
    let responseData = [];
    for (let category in books) {
        responseData.push({label: category, value: books[category]});
    }
    let labels = responseData.map(item => item.label);
    let values = responseData.map(item => item.value);

    let ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = 300; // 设置饼状图的宽度
    ctx.canvas.height = 300; // 设置饼状图的高度

    let pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',  // 红色
                    'rgba(54, 162, 235, 0.5)', // 蓝色
                    'rgba(255, 206, 86, 0.5)',  // 黄色
                    'rgba(75, 192, 192, 0.5)',  // 绿色
                    'rgba(153, 102, 255, 0.5)', // 紫色
                    'rgba(255, 159, 64, 0.5)'   // 橙色
                ],
            }]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Pie Chart'
            },
            plugins: {
                beforeDraw: function (chart) {
                    let width = chart.chart.width;
                    let height = chart.chart.height;
                    let ctx = chart.chart.ctx;

                    ctx.font = '14px Arial';
                    ctx.fillStyle = '#000';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    let dataSum = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

                    chart.data.labels.forEach(function (label, index) {
                        let dataset = chart.data.datasets[0];
                        let meta = chart.getDatasetMeta(0);
                        let total = meta.total;

                        let currentValue = dataset.data[index];
                        let percentage = parseFloat(((currentValue / dataSum) * 100).toFixed(1));
                        let posX = (width / 2) + meta.data[index]._model.x;
                        let posY = (height / 2) + meta.data[index]._model.y;

                        ctx.fillText(percentage + '%', posX, posY);
                    });
                }
            }
        }
    });

    let content3 = document.getElementById('table-container-3');
    content3.appendChild(ctx.canvas);
    content3.style.display = 'flex';
    content3.style.justifyContent = 'center';
    content3.style.alignItems = 'center';


}


document.addEventListener('DOMContentLoaded', function () {
    // 模拟后端返回的订单数据
    let orders;
    $(function () {
        $.ajax({
            url: backend + "/order/getall",
            type: "get",

            success(resp) {
                orders = resp;
                let books = {
                    "童书": 0,
                    "哲学": 0,
                    "小说": 0,
                    "工具书": 0,
                    "传记": 0,
                    "历史": 0
                };
                orders.forEach(function (order) {
                    if (order.bookClass === "童书")
                        books["童书"] += 1;
                    if (order.bookClass === "哲学")
                        books["哲学"] += 1;
                    if (order.bookClass === "小说")
                        books["小说"] += 1;
                    if (order.bookClass === "工具书")
                        books["工具书"] += 1;
                    if (order.bookClass === "传记")
                        books["传记"] += 1;
                    if (order.bookClass === "历史")
                        books["历史"] += 1;
                });
                print(books);
            },
            error() {
                console.log("fail")
            }
        });
    })

});

