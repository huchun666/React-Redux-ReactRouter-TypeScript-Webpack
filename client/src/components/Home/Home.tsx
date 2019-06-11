import * as React from "react";
import Map from '../map/map';
import './home.scss';

interface homeProps {
    testInterface: string
}

class Home extends React.Component<homeProps, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className="page_home">
            <Map></Map>
        </div>
    }
}

export default Home