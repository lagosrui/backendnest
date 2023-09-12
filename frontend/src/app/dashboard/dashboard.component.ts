import * as echarts from 'echarts';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MetamaskService } from '../services/metamask.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  openProposals?: any[];
  endedProposals?: any[];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private mService: MetamaskService) {
    this.openProposals = [];
    this.endedProposals = [];
  }

  ngOnInit(): void {
    this.pieChart();
    this.lineChart();
    this.areaMoneyChart();
    this.areaUsersChart();
  }

  pieChart() {
    const chartContainer = document.getElementById('pie-container');
    const myChart = echarts.init(chartContainer);

    const options = {
      title: {
        left: 'center',
        text: 'Proposals type'
      },
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: 40,
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  { value: 54, name: 'Open', itemStyle: {color: '#6528F7'}},
                  { value: 65, name: 'Unsuccess', itemStyle: {color: '#A076F9'} },
                  { value: 232, name: 'Success', itemStyle: {color: '#D7BBF5'} }
              ]
          }
      ]
  };

    myChart.setOption(options);
  }

  lineChart() {
    const chartContainer = document.getElementById('line-container');
    const myChart = echarts.init(chartContainer);

    const options = {
      title: {
        left: 'center',
        text: 'Proposals evolution'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Open',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
          itemStyle: {color: '#6528F7'}
        },
        {
          name: 'Unsuccess',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {color: '#A076F9'}
        },
        {
          name: 'Success',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle: {color: '#D7BBF5'}
        }
      ]
    };

    myChart.setOption(options);
  }

  areaMoneyChart() {

    const chartContainer = document.getElementById('area-money-container');
    const myChart = echarts.init(chartContainer);

    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 1000; i++) {
      var now = new Date((base += oneDay));
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    const options = {
      tooltip: {
        trigger: 'axis',
        position: function (pt: any) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Money Raised'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10
        },
        {
          start: 0,
          end: 10
        }
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: '#A076F9'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#A076F9'
              },
              {
                offset: 1,
                color: '#A076F9'
              }
            ])
          },
          data: data
        }
      ]
    };

    myChart.setOption(options);
  }

  areaUsersChart() {

    const chartContainer = document.getElementById('area-users-container');
    const myChart = echarts.init(chartContainer);

    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 1000; i++) {
      var now = new Date((base += oneDay));
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    const options = {
      tooltip: {
        trigger: 'axis',
        position: function (pt: any) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Users'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10
        },
        {
          start: 0,
          end: 10
        }
      ],
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: '#6528F7'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#6528F7'
              },
              {
                offset: 1,
                color: '#6528F7'
              }
            ])
          },
          data: data
        }
      ]
    };

    myChart.setOption(options);
  }











}
