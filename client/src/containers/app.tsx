import * as React from "react";

interface propTypes {
    testInterface: string
}

export default class App extends React.Component<propTypes, {}>{
    constructor (props: any) {
        super(props);
    }
    render() {
        console.log(this.props)
        return <div>App</div>
    }
}