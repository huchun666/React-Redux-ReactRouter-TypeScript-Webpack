import * as React from "react";
import { addOne, test } from "../actions/index";
import { connect } from "react-redux";

interface IProps {
    addOne: Function,
    test: Function,
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
        // this.props.addOne();
        // this.setState((preState) => {
        //     return {aaa: preState.aaa + 1}
        // })
        this.props.test({
            username: 'huchun',
            password: '123456'
        });
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
const mapDispatchToProps = {addOne, test};

export default connect(mapStateToProps, mapDispatchToProps)(Home)