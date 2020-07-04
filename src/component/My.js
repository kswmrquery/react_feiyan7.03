import React,{Component} from "react"


import MyTable from './MyTable/MyTable';
import MyMap from './MyMap/MyMap';
import Myheader from './Myheader/Myheader';
import Mysearch from './Mysearch/Mysearch';
import Mychart from './Mychart/Mychart';

class My extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render (){

        return (
            <div>
                <Myheader feiyanChinalist={this.props.feiyanChinalist} feiyanChina_yesterdead={this.props.feiyanChina_yesterdead} feiyanChina_yestercure={this.props.feiyanChina_yestercure}/>
                <MyMap feiyanChinalist={this.props.feiyanChinalist} />
                <Mychart newChinalist={this.props.newChinalist} />
                <Mysearch feiyanChinalist={this.props.feiyanChinalist}/>
                <MyTable feiyanChinalist={this.props.feiyanChinalist} />
            </div>
        )
    }
}

export default My;