import React,{Component} from 'react';
import './Worldheader.css';

class Worldheader extends Component {

    constructor(props) {
        super(props);
        this.state={ };
    }
    render() {

        let tot_exist = 0;
        let tot_confirm = 0;
        let tot_cure = 0;
        let tot_dead = 0;
        let tot_new = 0;
        this.props.feiyanWorldlist.forEach((element,key) => {
            tot_exist += element.exist;
            tot_confirm += element.confirm;
            tot_cure += element.cure;
            tot_dead += element.dead;
            tot_new += element.new;
        });
        let color1={color:"#FE6256"}
        let color2={color:"#E61D2E"}
        let color3={color:"#1BB0B5"}
        let color4={color:"#4D5054"}

        let feiyanWorld_yeasterexist =  tot_new - this.props.feiyanWorld_yestercure - this.props.feiyanWorld_yesterdead;

        return (
            <div>
                <div className="headertitle">国外疫情</div>
                <div className="headerdate">数据更新至2020.07.03 16:26</div>
                <div className="Myheader">
                        <div className="header_element">
                            <div className="element_title">现有确诊</div>
                            <div className="element_tot" style={color1}>{tot_exist}</div>
                            <div className="element_new">昨日 <span style={color1}> {feiyanWorld_yeasterexist}</span></div>
                        </div>
                        <div className="header_element">
                            <div className="element_title">累计确诊</div>
                            <div className="element_tot" style={color2}>{tot_confirm}</div>
                            <div className="element_new">昨日 <span style={color2}> {tot_new}</span></div>
                        </div>
                        <div className="header_element">
                            <div className="element_title">累计治愈</div>
                            <div className="element_tot" style={color3}>{tot_cure}</div>
                            <div className="element_new">昨日 <span style={color3}> {this.props.feiyanWorld_yestercure}</span></div>
                        </div>
                        <div className="header_element">
                            <div className="element_title">累计死亡</div>
                            <div className="element_tot" style={color4}>{tot_dead}</div>
                            <div className="element_new">昨日 <span style={color4}> {this.props.feiyanWorld_yesterdead}</span></div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Worldheader;