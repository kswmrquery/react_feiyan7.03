import React,{Component} from 'react';
import './App.css'

import My from './component/My';
import Other from './component/Other';
class  App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      barstyle :{
        left: "193px"
      },
      navmystyle : "navitem navactive",
      navotherstyle: "navitem"
    }
  }



  render() {

    let element = "";
    if(this.state.navmystyle==="navitem navactive"){
        element = (
          <My feiyanChinalist={this.props.feiyanChinalist} 
          feiyanChina_yesterdead={this.props.feiyanChina_yesterdead} 
          feiyanChina_yestercure={this.props.feiyanChina_yestercure}
          newChinalist={this.props.newChinalist}></My>
        );
    }
    else{
      element =(
          <Other feiyanWorldlist={this.props.feiyanWorldlist} 
          feiyanWorld_yesterdead={this.props.feiyanWorld_yesterdead} 
          feiyanWorld_yestercure={this.props.feiyanWorld_yestercure}
          newWorldlist={this.props.newWorldlist}
          feiyanChinalist={this.props.feiyanChinalist} 
          />
      );
    }
    return (
        <div className='main'>
            <div className="myApp">
            <div className="header">
                <h3>新型冠状病毒肺炎</h3>
                <h1>疫情实时大数据报告</h1>
            </div>
              <div className="myTable">
                <div className="nav">
                  <div className={this.state.navmystyle} onClick={()=>this.navEvent(0)}>国内疫情</div>
                  <div className={this.state.navotherstyle} onClick={()=>this.navEvent(1)}>国外疫情</div>
                  <div className="bar" style={this.state.barstyle}></div>
                </div>{element}</div>
            </div>
        </div>
    );
  }

  navEvent=(id)=> {
      this.setState ({
        barstyle:{
          left: (id*495+193)+'px'
        }
      });

      if(id===0){
        this.setState({
          navmystyle: "navitem navactive",
          navotherstyle: "navitem"
        })
      }
      else {
        this.setState({
          navmystyle: "navitem",
          navotherstyle: "navitem navactive"
        })
      }
  }

}

export default App;
