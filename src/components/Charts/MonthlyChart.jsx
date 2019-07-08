import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

import ChartHeader from './ChartHeader';
import Panel from '../shared/Panel';

const data = [
    {
        name: 'Jan', receita: 4000, despesa: 2400,
    },
    {
        name: 'Fev', receita: 3000, despesa: 1398,
    },
    {
        name: 'Mar', receita: 2000, despesa: 9800,
    },
    {
        name: 'Abr', receita: 2780, despesa: 3908,
    },
    {
        name: 'Mai', receita: 1890, despesa: 4800,
    },
    {
        name: 'Jun', receita: 2390, despesa: 3800,
    },
    {
        name: 'Jul', receita: 3490, despesa: 4300,
    },
    {
        name: 'Ago', receita: 3490, despesa: 4300,
    },
    {
        name: 'Set', receita: 3490, despesa: 4300,
    },
    {
        name: 'Out', receita: 3490, despesa: 4300,
    },
    {
        name: 'Nov', receita: 3490, despesa: 4300,
    },
    {
        name: 'Dez', receita: 3490, despesa: 4300,
    }
];

const MonthlyChart = () => {
    const legendColor = (value) => 
        <span style={{ color: '#fff' }}>{value}</span>

    return (
        <Panel bg='#232a33'>
            <ChartHeader title='Receita e Despesas' />
            <BarChart
                width={900}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis tick={{ fill: '#fff' }} dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend formatter={legendColor} />
                    <Bar dataKey="receita" fill="#673ab7"/>
                    <Bar dataKey="despesa" fill="#9575cd"/>
            </BarChart>
        </Panel>
    );
};

export default MonthlyChart;