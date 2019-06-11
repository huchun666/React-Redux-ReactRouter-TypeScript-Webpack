import * as React from "react";
import { Link, NavLink } from 'react-router-dom'
import "./noMatch.scss";
interface propTypes {
    testInterface: string
}

export default class NoMatch extends React.Component<propTypes, {}>{
    constructor (props: any) {
        super(props);
    }
    render() {
        console.log(this.props)
        const refCallback = node => {
        // `node` refers to the mounted DOM element or null when unmounted
            console.log(node)
        }
        // only consider an event active if its event id is an odd number
        const oddEvent = (match, location) => {
            console.log(match, location)
            if (!match) {
                return false
            }
            const eventID = parseInt(match.params.eventID)
            return !isNaN(eventID) && eventID % 2 === 1
        }
        return <div>
            <h1>noMatch</h1>
            <button>
                <Link to="/home" innerRef={refCallback}>home</Link>
            </button>
            <button>
                <Link to="/app/huchun">app</Link>
            </button>
            <NavLink
                to="/sss"
                activeClassName="selected"
                isActive={oddEvent}
            >
                FAQs
            </NavLink>
        </div>
    }
}