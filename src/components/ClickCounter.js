import React, { Component } from 'react'
import withCounter from './HOC/withCounter'

class ClickCounter extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.props.fun}>Clicked {this.props.clicked} time by {this.props.name}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)


