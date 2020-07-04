import React,{Component} from 'react';
import './Mysearchstyle.css'
class Mysearch extends Component{
    constructor(props){
        super(props);

        this.state={
            value: "",
            result:{
                flag:0,
                name:"",
                new:0,
                confirm:0,
                exist:0,
                cure:0,
                dead:0,
            }
        }
    }
    render(){
        let element=null;
        if(this.state.result.flag === 2) {
            element=(
                <div>输入错误，不是省份。请输入正确的省份</div>
            )
        }
        else if(this.state.result.flag === 1){
            element=(
                <div className="result">
                    <div className="result_name">{this.state.result.name}</div>
                    <div>新增: <span>{this.state.result.new}</span></div>
                    <div>现有: <span>{this.state.result.exist}</span></div>
                    <div>累计: <span>{this.state.result.confirm}</span></div>
                    <div>治愈: <span>{this.state.result.cure}</span></div>
                    <div>死亡: <span>{this.state.result.dead}</span></div>
                </div>
            )
        }
        return(
            <div className="mysearch">
                <div className="searchtitle">查询省份病例：</div>
                <div className='searchelement'>
                    <input placeholder="请输入查询的省份" onKeyDown={this.searchEvent} value={this.state.value} onChange={this.changeEvent}></input>
                </div>
                <div>{element}</div>
            </div>
        )
    }

    searchEvent=(e)=>{
        if(e.keyCode===13) {
            let f=false;
            this.props.feiyanChinalist.forEach((item, index)=>{
                if(item.name === this.state.value){
                    f=true;
                    this.setState({
                        result:{
                            flag:1,
                            name:this.state.value,
                            new:item.new,
                            confirm:item.confirm,
                            exist:item.exist,
                            cure:item.cure,
                            dead:item.dead,
                        }
                    })
                }
            });
            if(f===false) {
                this.setState({
                    result:{
                        flag:2
                    }
                })
            }
            this.setState({
                value:""
            })
        }
    }

    changeEvent=(e)=>{
        this.setState({
            value: e.target.value
        })
    }
}

export default Mysearch;