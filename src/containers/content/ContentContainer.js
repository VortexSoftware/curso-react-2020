import React, { Component } from 'react'

export default class ContentContainer extends Component {
    render() {
        console.log('CONTENT CONTAINER', this.props.optionSelected)
        return (
            <div className='content-container'>{this.props.optionSelected}</div>
        )
    }
}
