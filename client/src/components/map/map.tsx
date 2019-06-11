import * as React from "react";
import './map.scss';
import { addOne } from "../../actions/index";
import { connect } from "react-redux";

// declare var BMap;
class Map extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(this.props)
    }

    render() {
        return <div id="container">map</div>
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log(state)
    return {
        goods: state.goods
    }
}

export default connect(mapStateToProps, {addOne})(Map)