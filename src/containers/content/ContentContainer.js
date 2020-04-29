import React, { Component } from 'react'
import GastosContainer from '../gastos/GastosContainer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    view: state.appReducer.view
})

const mapDispatchToProps = {

}

class ContentContainer extends Component {
    
    renderView = () => {
        switch(this.props.view) {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)