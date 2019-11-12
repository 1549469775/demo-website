// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

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

    animationDurationUpdate: 750
  }]
};
myChart.setOption(option);
let ctrlDown = false;
let shiftDown = false;
document.onkeydown = function (event) {
  if (event.keyCode && event.keyCode == 16) { // shift 键
    //要做的事情
    shiftDown = true;
  }
  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = true;
  }
};
document.onkeyup = function (event) {
  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = false;
  }
  if (event.keyCode && event.keyCode == 16) { // shift 键
    //要做的事情
    shiftDown = true;
  }
};
//点击事件
myChart.off('click');
myChart.on('click', function (param) {
  if (shiftDown) {
    console.log(425);
    myChart.setOption(option);
    return;
  }
  if (!param.data.collapsed == false && ctrlDown) {
    findIndex(data, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    // option.series[0].animation = true;
    myChart.setOption(option);
  } else if (!param.data.collapsed == true) {
    // option.series[0].animation = false;
    findIndex(data, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    myChart.setOption(option);
  } else {
    myChart.setOption(option);
  }
});