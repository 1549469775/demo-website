// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var realData = JSON.parse(MainBoCai.genJson(20));
let str = '708'

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
    roam: true,
    data: [realData],
    symbol: 'emptycircle',
    left: '1%',
    right: '1%',
    top: '8%',
    bottom: '20%',

    symbolSize: (v, param) => {
      if (str && param.name.match(str)) {
        return 18
      } else {
        return 12;
      }
    },
    symbol: (v, param) => {
      if (str && param.name.match(str)) {
        return 'arrow'
      } else {
        return 'emptycircle';
      }
    },
    symbolKeepAspect: false,
    layout: 'orthogonal',
    orient: 'TB',

    expandAndCollapse: true,
    initialTreeDepth: -1,
    label: {
      normal: {
        show: true,
        position: 'top',
        verticalAlign: 'middle',
        align: 'middle',
        opacity: 0.5,
        formatter: function (param) {
          if (str && param.name.match(str)) {
            return '{a|' + param.name + '}'
          } else {
            return param.name;
          }
        },
        rich: {
          a: {
            color: 'red',
            fontSize: 20,
            fontWeight: 'bolder',
            lineHeight: 10
          }
        }
      },
      emphasis: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: 'red'
      }
    },

    leaves: {
      label: {
        normal: {
          show: true,
          position: 'top',
          verticalAlign: 'middle',
          align: 'middle'
        }
      }
    },
    // animation: false,
    animationDurationUpdate: 750
  }]
};
myChart.setOption(option);
let ctrlDown = false;
let shiftDown = false;
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
  }
};
//点击事件
const ccc = document.getElementById('ccc')
myChart.off('click');
myChart.on('click', function (param) {
  if (!param.data.collapsed == false && ctrlDown) {
    findIndex(realData, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    // myChart.clear();
    myChart.setOption(option);
  } else if (!param.data.collapsed == true) {
    findIndex(realData, param.data.name, {
      key: 'collapsed',
      value: !param.data.collapsed
    })
    // myChart.clear();
    myChart.setOption(option);
  } else {
    // myChart.clear();
    alert(param.data.name)
    ccc.innerHTML = param.data.name
    myChart.setOption(option);
  }
});