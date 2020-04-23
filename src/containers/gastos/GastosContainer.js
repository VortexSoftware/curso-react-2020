import React, { Component } from 'react'
import Button from '../../components/button'
import { Table } from 'antd';
import { EyeFilled } from '@ant-design/icons';

class GastosContainer extends Component {
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
                    <Table dataSource={dataSource} columns={columns} size='small' />;
                </div>
            </div>
            )
    }
}

export default GastosContainer


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
                <EyeFilled onClick={() => console.log('clicked')}/>
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