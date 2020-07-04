import React,{Component} from "react"

import Worldheader from './Worldheader/Worldheader'
import WorldTable from './WorldTable/WorldTable'
import Worldsearch from './Worldsearch/Worldsearch'
import WorldMap from './WorldMap/WorldMap'
import Worldchart from './Worldchart/Worldchart'

class Other extends Component {

    constructor (props) {
        super(props);
        this.state= {};
    }

    render() {
        return (
            <div>
                <Worldheader feiyanWorldlist={this.props.feiyanWorldlist} feiyanWorld_yesterdead={this.props.feiyanWorld_yesterdead} feiyanWorld_yestercure={this.props.feiyanWorld_yestercure}/>
                <WorldMap feiyanWorldlist={this.props.feiyanWorldlist}  feiyanChinalist={this.props.feiyanChinalist}/>
                <Worldchart newWorldlist={this.props.newWorldlist} />
                <Worldsearch feiyanWorldlist={this.props.feiyanWorldlist}/>
                <WorldTable feiyanWorldlist={this.props.feiyanWorldlist} />
            </div>
        )
    }
}


export default Other;