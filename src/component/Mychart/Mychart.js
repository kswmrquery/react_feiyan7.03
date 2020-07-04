import React,{Component} from 'react';
import './Mychartstyle.css'

class Mychart extends Component{

    constructor(props){
        super(props);
        this.state={ };
    }

    
    componentDidMount() {

        let timeData = [];
        let Data = [];
       
        for(let key in this.props.newChinalist) {
            timeData.push(key);
            Data.push(this.props.newChinalist[key].value);
          }          
        
        let option = {
            title: {
                text: '全国 总新增确诊 趋势',
                subtext: 'mrquery 制作',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                left: 50,
                right: 50,
                height: '75%'
            },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },

            xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {onZero: true},
                    data: timeData
            },
            yAxis: {
                    name: '单位/例',
                    type: 'value',
                    max: 8000
            },
            series: {
                    name: '总新增确诊',
                    type: 'line',
                    symbolSize: 4,
                    hoverAnimation: false,
                    data: Data
             },
        };
        let myChart = window.echarts.init(document.getElementById('mychart'));
        myChart.setOption(option);
    }
    render() {

        return(
            <div className="mychart">
                <div id="mychart" className="elementchart"></div>
            </div>
        )
    }
}

export default Mychart
