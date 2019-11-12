// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var realData = JSON.parse(MainBoCai.genJson(200));
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

$('#forceMe').click(function () {
  realData = realData.children[1];
  myChart.clear();
  option.series[0].data = [realData];
  myChart.setOption(option);
})

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
    left: '3%',
    right: '3%',
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
        $("#myModal").modal({
          keyboard: true
        })
        return isExpand
      }
    },
    symbolSize: (v, param) => {
      if (str && param.name.match(str)) {
        return 35
      } else {
        return 20;
      }
    },
    symbol: (v, param) => {
      if (Number(param.name) % 2 == 0) {
        return 'image://https://cn.bing.com/th?id=OIP.1e3YVW946dgy5uJH764JXwHaFj&pid=Api&rs=1'
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
        fontSize: 20,
        distance: 10,
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
            fontSize: 26,
            fontWeight: 'bolder',
            lineHeight: 10
          }
        }
      },
      // 高亮悬浮
      emphasis: {
        fontSize: 26,
        distance: 10,
        fontWeight: 'bolder',
        color: 'red'
      }
    },

    leaves: {
      label: {
        normal: {
          fontSize: 20,
          show: true,
          distance: 10,
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