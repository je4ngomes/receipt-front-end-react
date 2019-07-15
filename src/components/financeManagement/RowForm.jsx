import React from 'react';
import { Select } from 'react-materialize';

const style = {
    background: '#29323c',
    padding: '5px',
    color: '#b39ddb',
    fontSize: '12pt',
    borderRadius: 0,
    border: 'none'
};

const RowForm = () => {
    return (
        <>
            <td>
                <input 
                    style={{ width: 125, ...style }} 
                    name='expires_date' type='date' 
                    className='browser-default'/>
                </td>
            <td>
                <input 
                    style={{ width: 140, ...style }} 
                    name='description' type='text' 
                    className='browser-default' />
                </td>
            <td>
                <input 
                    style={{ width: 70, ...style }} 
                    name='cost' type='text' 
                    className='browser-default' />
            </td>
            <td>
                <input 
                    style={{ width: 130, ...style }} 
                    name='paidFrom' type='text' 
                    className='browser-default' />
            </td>
            <td>
                <input 
                    style={{ width: 130, ...style }} 
                    name='category' 
                    type='text' 
                    className='browser-default' />
            </td>
            <td>
                <Select  name='paid'>
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </Select>
            </td>
        </>
    );
};

export default RowForm;
