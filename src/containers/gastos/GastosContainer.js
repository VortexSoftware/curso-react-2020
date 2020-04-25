import React, { Component } from 'react'
import Button from '../../components/button'
import { Table } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import { fetchGastos } from '../../reducers/gastos/gastosActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  gastos: state.gastosReducer.gastos,
  loadingGastos: state.gastosReducer.loadingGastos
})

const mapDispatchToProps = {
  fetchGastos
}

class GastosContainer extends Component {

  componentDidMount() {
    this.props.fetchGastos()
  }

  render() {
      return (
          <div className='gastos-container'>
              <div className='gastos-container__header'>
                  <h2>Gastos</h2>
              </div>
              <div className='gastos-container__subheader'>
                  <Button title='Nuevo gasto' onClick={() => console.log('click')} />
                  <div className='gastos-container__subheader__total'>Total de gastos en el mes: $2000</div>
              </div>
              <div className='gastos-container__body'>
                  <Table dataSource={this.props.gastos} columns={columns} size='small' loading={this.props.loadingGastos} />;
              </div>
          </div>
          )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GastosContainer)


const columns = [
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Cuenta',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Monto',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
        title: 'Proveedor',
        dataIndex: 'provider',
        key: 'provider',
    },
    {
        title: 'Acciones',
        key: 'actions',
        render: (text, record) => (
            <span>
                <EyeFilled onClick={() => console.log('clicked')} style={{color: '#1DC8AE'}}/>
            </span>
        )
    }
  ];

  const dataSource = [
    {
      key: '1',
      category: 'Comida',
      account: 'Caja chica',
      amount: 100,
      provider: 'Proveedor X'
    }
  ];