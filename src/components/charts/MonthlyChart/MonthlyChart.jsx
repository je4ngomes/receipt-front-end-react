import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

import PanelContainer from '../../shared/PanelContainer';
import { customLegendColor } from '../../../utils/util';

const data = [
    {
        name: 'Jan', receita: 4000, despesa: 2400,
    },
    {
        name: 'Fev', receita: 3000, despesa: 1398,
    },
    {
        name: 'Mar', receita: 6000, despesa: 9800,
    },
    {
        name: 'Abr', receita: 2780, despesa: 3908,
    },
    {
        name: 'Mai', receita: 1890, despesa: 4800,
    },
    {
        name: 'Jun', receita: 390, despesa: 800,
    },
    {
        name: 'Jul', receita: 3490, despesa: 4300,
    },
    {
        name: 'Ago', receita: 190, despesa: 80,
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

    return (
        <PanelContainer title='Monitoramento Financeiro'>
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
                    <Legend formatter={customLegendColor} />
                    <Bar dataKey="receita" fill="#673ab7"/>
                    <Bar dataKey="despesa" fill="#9575cd"/>
            </BarChart>
        </PanelContainer>
    );
};

export default MonthlyChart;