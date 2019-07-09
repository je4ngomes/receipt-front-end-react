import React from 'react'
import IncomeChart from '../../shared/IncomeAndExpensesChart';

export default () => {
    const data = [
        { name: 'Receitas paga', value: 400 },
        { name: 'Receitas não paga', value: 300 },
    ];

    return (
        <IncomeChart title={'Total Receitas'} data={data}/>
    );
};
