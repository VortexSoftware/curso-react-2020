import React, { PureComponent, Component } from 'react'
import GastosContainer from '../gastos/GastosContainer'

export default class ContentContainer extends Component {
    
    shouldComponentUpdate(nextProps) {
        if(nextProps.optionSelected !== this.props.optionSelected) {
            return true
        }

        return false
    }

    renderView = () => {
        switch(this.props.optionSelected) {
            case 'Gastos':
                return <GastosContainer /> 
            case 'Productos':
                return <div>Productos</div>
            default:
                return null
        }
    }

    render() {
        return (
            <div className='content-container'>
                {this.renderView()}
            </div>
        )
    }
}