import React from 'react'
import { Component } from 'react'

export default function withCounter(WrappedComponent) {
    
    return class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 clicked: 0
            }
        }
        render() {
           const updateCounter =()=>{
               this.setState({clicked: this.state.clicked+1}) 
            }
            return <WrappedComponent clicked={this.state.clicked} fun={updateCounter} {...this.props}/>
        }
    }
    

    
}


