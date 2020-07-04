import React,{Component} from 'react';
import './Worldchart.css'

class Worldchart extends Component{

    constructor(props){
        super(props);
        this.state={ };
    }

    
    componentDidMount() {

        let worldtimeData = [];
        let worldData = [];
       
        console.log(this.props.newWorldlist)

        this.props.newWorldlist.forEach((item, key)=>{
            worldtimeData.push(item.date);
            worldData.push(item.value);
        });

        console.log(worldtimeData);
        let option = {
            title: {
                text: '世界 总新增确诊 趋势',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                left: 60,
                right: 30,
                height: '75%'
            },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },

            xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {onZero: true},
                    data: worldtimeData,
                    max: 'dataMax'
                   
            },
            yAxis: {
                    name: '单位/例',
                    type: 'value',
                    max: 250000
            },
            series: {
                    name: '总新增确诊',
                    type: 'line',
                    symbolSize: 3,
                    hoverAnimation: false,
                    data: worldData
             },
        };
        let myChart = window.echarts.init(document.getElementById('worldchart'));
        myChart.setOption(option);
    }
    render() {

        return(
            <div className="mychart">
                <div id="worldchart" className="elementchart"></div>
            </div>
        )
    }
}

export default Worldchart
