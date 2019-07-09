import React from 'react';
import ExpensesChart from '../../shared/IncomeAndExpensesChart';

export default () => {
    const data = [
        { name: 'Despesas paga', value: 250 },
        { name: 'Despesas não paga', value: 600 },
    ];

    return (
        <ExpensesChart title='Total Despesas' data={data} />
    );
};
