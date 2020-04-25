import React, { Component } from 'react';
import '../../App.scss';
import HeaderContainer from '../header/HeaderContainer';
import SidebarContainer from '../sidebar/SidebarContainer';
import ContentContainer from '../content/ContentContainer';

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        optionSelected: ''
    }
  }

  handleSelectOption = (optionSelected) => {
    this.setState({ optionSelected } )
  }

  render() {
    return (
      <div className='app-container'>
        <HeaderContainer />
        <div className='body-container'>
          <SidebarContainer optionSelected={this.state.optionSelected} onSelectOption={this.handleSelectOption}/>
          <ContentContainer optionSelected={this.state.optionSelected} />
        </div>
      </div>
  
    )
  }
}

export default AppContainer;

// first-functionality
// containers
// componenets
// redux
// store

// first-feature
// users
//  redux
//  containers
// productos
// gastos

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4Nzc0MjI0MCwiZXhwIjoxNjE5Mjc4MjQwfQ.CwzpF1OszuhA4MGKOzcLD9YeBhGrSuOfIR4Zgi6JLf8
