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
// https://github.com/apache/incubator-echarts/blob/master/src/chart/tree/treeAction.js
var ccc = document.getElementById('ccc')
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
    // 缩放
    zoom: 1,
    diyExpand: (name, isExpand) => {
      if (ctrlDown) {
        return !isExpand
      } else {
        // 收缩
        ccc.innerHTML = name
        console.log('click');
        return isExpand
      }
    },
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
    initialTreeDepth: 2,
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
      // 高亮悬浮
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