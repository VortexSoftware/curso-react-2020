import React, { Component } from 'react';
import '../../App.scss';
import HeaderContainer from '../header/HeaderContainer';
import SidebarContainer from '../sidebar/SidebarContainer';
import ContentContainer from '../content/ContentContainer';

class AppContainer extends Component {
  state = {
    optionSelected: ''
  }

  handleSelectOption = (optionSelected) => {
    this.setState({optionSelected})
  }

  render() {
    return (
      <div className='app-container'>
        <HeaderContainer />
        <div className='body-container'>
          <SidebarContainer optionSelected={this.state.optionSelected} onSelectOption={this.handleSelectOption}/>
          <ContentContainer optionSelected={this.state.optionSelected}/>
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

