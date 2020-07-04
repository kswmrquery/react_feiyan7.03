import React,{Component} from 'react';
import  './myTablestyle.css';

class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state={ };
    }

    render() {

        return (
            <div className = "datalist">
                <div className="title" >国内各地区疫情统计汇总</div>
                <div className="data">
                       <ul>
                            <li>
                                <span>疫情地区</span>
                                <span>新增</span>
                                <span>现有</span>
                                <span>累计</span>
                                <span>治愈</span>
                                <span>死亡</span>
                            </li>
                            {
                                this.props.feiyanChinalist.map((item, index)=>{
                                    return (
                                        <li key={index+1}>
                                            <span className="area">{item.name}</span>
                                            <span>{item.new}</span>
                                            <span>{item.exist}</span>
                                            <span>{item.confirm}</span>
                                            <span>{item.cure}</span>
                                            <span>{item.dead}</span>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                </div>
            </div>
        )
    }
    
}

export default MyTable;