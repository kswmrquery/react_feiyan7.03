import React,{Component}  from "react"
import './mymapstyle.css'
class MyMap extends Component {
  
    constructor(props) {
        super(props);
        this.state={ };
    }
    componentDidMount( ){
        
        let dataList=[];
        this.props.feiyanChinalist.forEach((item, index)=>{
            let dataitem= {
                name:"",
                value: 0
            }
            dataitem.name = item.name;
            dataitem.value = item.confirm;
            dataList[index] = dataitem;
        });
        
        let option = {
            tooltip: {
                    formatter:function(params,ticket, callback){
                        return params.name+'<br />'+params.seriesName+'：'+params.value
                    }
                },
            visualMap: {
                type: 'piecewise',
                pieces:[
                    {min: 10000, max:1000000, label:'大于10000人',color:'#B70001'},
                    {min: 1000, max:9999, label:'1000-9999人',color:'#E53A44'},
                    {min: 100, max:999, label:'100-999人',color:'#F46F66'},
                    {min: 10, max:99, label:'10-99人',color:'#FE9585'},
                    {min: 1, max:9, label:'1-9人',color:'#FFE4DB'},
                    {min: 0, max:0, label:'没有确诊人',color:'#FFFFFF'},
                ]
            },
            geo: {
                map: 'china',
                roam: false,
                zoom:1.23,
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.8)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderWidth:1.1,
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#C8FFFD',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '确诊',
                    type: 'map',
                    geoIndex: 0,
                    data:dataList
                }
            ]
        };
        let myChart = window.echarts.init(document.getElementById('mymap'));
        myChart.setOption(option);
    }
    render() {
        return (
            <div className='mymap'>
                <div className="maptitle">
                    累 计 确 诊
                </div>
                <div id="mymap" className="elementmap">
                </div>
            </div>
            
        )
    }
}

export default MyMap;