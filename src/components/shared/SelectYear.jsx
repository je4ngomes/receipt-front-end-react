import React, { useState, useRef } from 'react';
import { Dropdown, Button, Icon } from 'react-materialize';

const SelectYear = () => {
    const [{ 
        isInputEditable, 
        date 
    }, setState] = useState({ 
        isInputEditable: false,
        date: new Date().getFullYear() 
    });
    const inputEl = useRef(null);

    const inc = n => n + 1;
    const dec = n => n - 1;
    const renderInputForm = () => (
        <form style={{ display: 'inline', marginLeft: '10px' }} onSubmit={handleSubmit}>
            <input style={{
                width: '70px',
                background: '#29323c',
                padding: '5px',
                fontSize: '12pt',
                borderRadius: 0,
                border: 'none'
            }} 
            className='browser-default purple-text text-lighten-3'
            autoFocus 
            ref={inputEl} 
            defaultValue={date} 
            type="text"/>
        </form>
    );

    const handleTypeYear = e => {
        e.preventDefault();
        setState({ date, isInputEditable: !isInputEditable });
    }

    const handleClick = (fn) => e => {
        e.preventDefault();
        setState({ isInputEditable: isInputEditable, date: fn(date) });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setState({ isInputEditable: !isInputEditable, date: parseInt(inputEl.current.value) });
    };


    return (
        isInputEditable ? renderInputForm() :
        <Dropdown
            trigger={
                <Button className='deep-purple' style={{ margin: '-5px 0 0 5px', width: '125px', fontSize: '11pt' }}>
                    {date}
                    <Icon right>arrow_drop_down</Icon>
                </Button>
            }
        >
            <a className='purple-text' onClick={handleClick(dec)} href='#prevYear'>Ano Anterior</a>
            <a className='purple-text' onClick={handleClick(inc)} href='#nextYear'>Próximo Ano</a>
            <a className='purple-text' onClick={handleTypeYear} href='#typeYear'>Digitar Ano</a>
        </Dropdown>
    );
};

export default SelectYear;
