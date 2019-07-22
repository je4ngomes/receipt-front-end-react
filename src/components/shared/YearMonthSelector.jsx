import React, { useState } from 'react';

import { Button } from 'react-materialize';
import YearSelector from './YearSelector';
import ActionsPanel from './ActionsPanel';

const YearMonthSelector = ({ onDateSelection }) => {
    const date = new Date();
    const [{ month, year }, setState] = useState({ 
        month: date.getMonth(),
        year: date.getFullYear()
     });

    const handleClick = ({ target: { value } }) => {
        const newState = { month: parseInt(value), year };
        setState(newState);

        onDateSelection(newState);
    }

    const onYearSelection = year => {
        const newState = { month, year };
        
        setState(newState);

        onDateSelection(newState);
    } 
 

    const monthsBtn = [
        "Jan", "Feb", "Mar", 
        "Abr", "Mai", "Jun", 
        "Jul", "Ago", "Set", 
        "Out", "Nov", "Dez"
    ].map((monthLabel, i) => (
        <Button
            onClick={handleClick} 
            className={`deep-purple ${month === i && 'darken-3'}`} 
            value={i}
        >
            {monthLabel}
        </Button>
    ));

    return (
        <div style={{ marginLeft: 15 }}>
            <ActionsPanel actions={[<YearSelector onYearSelection={onYearSelection} style={{ display: 'inline' }} />, ...monthsBtn]} />
        </div>
    );
};

export default YearMonthSelector;
