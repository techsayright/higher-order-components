import React, { Component } from 'react'
import withCounter from './HOC/withCounter'

class HoverCounter extends Component {
    render() {
        return (
            <div onMouseEnter={this.props.fun}>
                Clicked {this.props.clicked} time by {this.props.god}
            </div>
        )
    }
}

export default withCounter(HoverCounter);
