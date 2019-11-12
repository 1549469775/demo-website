// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

function findIndex(data, name, coll) {
  for (let i = 0; i < data.children.length; i++) {
    let item = data.children[i];
    if (item.collapsed == name) {
      item[coll.key] = coll.value;
    } else if (item.children && item.children.length > 0) {
      findIndex(data, name, coll);
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
document.onkeypress = function (event) {
  console.log(event)
  var e = event || window.event || arguments.callee.caller.arguments[0];

  if (e && e.keyCode == 13) { // enter 键
    //要做的事情
    console.log('dsadsd')
  }
};
//点击事件
myChart.off('click');
myChart.on('click', function (param) {
  console.log(param);
  findIndex(data, param.data.name, !param.data.collapsed)
  // if (!param.data.collapsed) {

  // } else {
  //   console.log(data.children[0].collapsed = true);
  console.log(data);
  // if (param.data.collapsed == false) {
  //   return;
  // } else {
  //   myChart.setOption(option);
  // }
  // myChart.setOption(option);
  // }

});