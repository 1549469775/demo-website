// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [{
    type: 'tree',

    data: [data],

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
});

// //点击事件
// myChart.on('click', function (param) {
//   console.log(param);
//   console.log(param.data);
//   param.event.event.stopPropagation();
//   param.event.event.preventDefault();
//   return false;
// });

myChart.on('legendselectchanged', function (param) {
  console.log(param);
  console.log(param.data);
  param.event.event.stopPropagation();
  param.event.event.preventDefault();
  return false;
});