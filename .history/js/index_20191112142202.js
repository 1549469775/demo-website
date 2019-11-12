// 基于准备好的dom，初始化echarts实例
let elChart = document.getElementById('main')
var myChart = echarts.init(elChart);

function findIndex(data, name, coll) {
  if (data.name == name) {
    data[coll.key] = coll.value;
    return;
  }
  if (data.children) {
    for (let i = 0; i < data.children.length; i++) {
      let item = data.children[i];
      if (item.name == name) {
        item[coll.key] = coll.value;
      } else {
        findIndex(item, name, coll);
      }
    }
  }

}

const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [{
    type: 'tree',

    data: [data],
    symbol: 'emptycircle',
    left: '2%',
    right: '2%',
    top: '8%',
    bottom: '20%',
    symbolSize: 15,
    symbol: 'emptyCircle',

    orient: 'vertical',

    expandAndCollapse: true,

    label: {
      normal: {
        position: 'top',
        rotate: -90,
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9
      }
    },

    leaves: {
      label: {
        normal: {
          position: 'bottom',
          rotate: -90,
          verticalAlign: 'middle',
          align: 'left'
        }
      }
    },
    // animation: false,
    animationDurationUpdate: 750
  }]
};
myChart.setOption(option);
let ctrlDown = false;
elChart.addEventListener('onkeydown', (event) => {
  console.log(213);

  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = true;
  }
})
elChart.addEventListener('onkeyup', (event) => {
  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = false;
  }
})
//点击事件
const ccc = document.getElementById('ccc')
myChart.off('click');
myChart.on('click', function (param) {
  if (!param.data.collapsed == false && ctrlDown) {
    findIndex(data, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    myChart.setOption(option);
  } else if (!param.data.collapsed == true) {
    findIndex(data, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    myChart.setOption(option);
  } else {
    ccc.innerHTML = param.data.name
    myChart.setOption(option);
  }
});