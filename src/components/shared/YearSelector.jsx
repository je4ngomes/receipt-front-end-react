import React, { useState, useRef } from 'react';
import { Dropdown, Button, Icon } from 'react-materialize';

const YearSelector = ({ style, onYearSelection }) => {
    const [{ 
        isInputEditable, 
        year 
    }, setState] = useState({ 
        isInputEditable: false,
        year: new Date().getFullYear() 
    });
    const inputRef = useRef();

    const inc = n => n + 1;
    const dec = n => n - 1;
    const renderInputForm = () => (
        <form style={{ display: 'inline', marginLeft: '10px' }} onSubmit={handleSubmit}>
            <input style={{
                width: '70px',
                background: '#29323c',
                padding: '5px',
                color: '#b39ddb',
                fontSize: '12pt',
                borderRadius: 0,
                border: 'none'
            }} 
            className='browser-default'
            autoFocus 
            ref={inputRef} 
            defaultValue={year} 
            type="text"/>
        </form>
    );

    const handleTypeYear = e => {
        e.preventDefault();
        setState({ year, isInputEditable: !isInputEditable });
    }

    const handleClick = (fn) => e => {
        e.preventDefault();
        const newState = { isInputEditable: isInputEditable, year: fn(year) };

        setState(newState)
   
        onYearSelection(newState.year);
    };

    const handleSubmit = e => {
        e.preventDefault();

        setState(
            { isInputEditable: !isInputEditable, year: parseInt(inputRef.current.value) },
            () => onYearSelection(year));
    };


    return (
        <div style={style}>
            {isInputEditable 
                ? renderInputForm() 
                : <Dropdown
                    trigger={
                        <Button className='deep-purple' style={{ margin: '-5px 0 0 5px', width: '125px', fontSize: '11pt' }}>
                            {year}
                            <Icon right>arrow_drop_down</Icon>
                        </Button>
                    }
                >
                    <a className='purple-text text-lighten-2' onClick={handleClick(dec)} href='#prevYear'>Ano Anterior</a>
                    <a className='purple-text text-lighten-2' onClick={handleClick(inc)} href='#nextYear'>Próximo Ano</a>
                    <a className='purple-text text-lighten-2' onClick={handleTypeYear} href='#typeYear'>Digitar Ano</a>
                </Dropdown>}
        </div>
    );
};

export default YearSelector;
