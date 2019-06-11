import * as React from "react";
import { addOne } from "../actions/index";
import { connect } from "react-redux";

interface IProps {
    addOne: Function,
    goods: number
}
export interface IState {
    aaa: number,
}

class Home extends React.Component<IProps, IState>{
    constructor (props: IProps) {
        super(props);
    }

    readonly state = {
        aaa: 1,
    }

    /**
     * handleAddOne
     */
    public handleAddOne = () => {
        this.props.addOne();
        this.setState((preState) => {
            return {aaa: preState.aaa + 1}
        })
    }

    render() {
        return <div>
            <h1>goods: {this.props.goods}</h1>
            <h2>state: {this.state.aaa}</h2>
            <button onClick={this.handleAddOne}>addOne</button>
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        goods: state.goods
    }
};
const mapDispatchToProps = {addOne};

export default connect(mapStateToProps, mapDispatchToProps)(Home)