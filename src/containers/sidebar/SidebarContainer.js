import React, { Component } from 'react'
import Option from '../../components/option'

class SidebarContainer extends Component {

    handleSelect = (optionSelected) => {
        this.props.onSelectOption(optionSelected)
    }

    render() {
        return (
            <div className='sidebar-container'>
                <Option title='Gastos' onSelect={this.handleSelect} selected={this.props.optionSelected === 'Gastos'} />
                <Option title='Productos' onSelect={this.handleSelect} selected={this.props.optionSelected === 'Productos'}/>
                <Option title='Usuarios' onSelect={this.handleSelect} selected={this.props.optionSelected === 'Usuarios'}/>
                <Option title='Admin' onSelect={this.handleSelect} selected={this.props.optionSelected === 'Admin'}/>
            </div>
        )
    }
}

export default SidebarContainer
