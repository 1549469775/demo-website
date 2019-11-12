// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
echarts.util.each(data.children, function (datum, index) {
  index % 2 === 0 && (datum.collapsed = true);
  index % 2 !== 0 && (datum.collapsed = false);
});
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
    initialTreeDepth: 2,
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
  // param.data.collapsed = false;
  console.log(param.data);
  // myChart.setOption(option);
});