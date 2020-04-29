import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/button/index'
import Input from '../../components/input/index'
import { login } from '../../reducers/app/appActions'

class LoginContainer extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeValueEmail = (email) => {
        this.setState({email})
    }

    handleChangeValuePassword = (password) => {
        this.setState({password})
    }

    login = () => {
        this.props.login(this.state.email, this.state.password)
    }

    render() {
        return (
            <div className='login-container'>
                <div className='login-container__header'>
                    <h3>Login</h3>
                </div>
                <div className='login-container__body'>
                    <Input
                        value={this.state.email}
                        title={'Email'}
                        onChangeValue={this.handleChangeValueEmail}/>
                    <Input
                        value={this.state.password}
                        type='password'
                        title={'Password'}
                        onChangeValue={this.handleChangeValuePassword}/>
                </div>
                <div className='login-container__footer'>
                    <Button title={'Iniciar sesion'} onClick={this.login}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
