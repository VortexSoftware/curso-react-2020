import React, { Component } from 'react';
import '../../App.scss';
import HeaderContainer from '../header/HeaderContainer';
import SidebarContainer from '../sidebar/SidebarContainer';
import ContentContainer from '../content/ContentContainer';
import ModalContainer from '../modal/ModalContainer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  showModal: state.appReducer.showModal
})

const mapDispatchToProps = {

}

class AppContainer extends Component {
  render() {
    return (
      <div className='app-container'>
        <HeaderContainer />
        <div className='body-container'>
          <SidebarContainer />
          <ContentContainer />
        </div>
        {this.props.showModal && <ModalContainer />}
      </div>
  
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

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
