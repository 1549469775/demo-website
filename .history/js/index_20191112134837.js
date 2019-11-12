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
document.onkeydown = function (event) {
  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = true;
  }
};
document.onkeyup = function (event) {
  if (event.keyCode && event.keyCode == 17) { // ctrl 键
    //要做的事情
    ctrlDown = false;
    console.log(ctrlDown);

  }
};
//点击事件
myChart.off('click');
myChart.on('click', function (param) {
  console.log(param.data.name, !param.data.collapsed);
  if (!param.data.collapsed == false) {
    findIndex(data, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    console.log(data);
    myChart.setOption(option);
  }
});