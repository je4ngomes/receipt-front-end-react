import React from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from 'recharts';
import PanelChartContainer from './PanelChartContainer';

const IncomeAndExpensesChart = ({ title, data }) => {
    const COLORS = ['#673ab7', '#9575cd'];
    const legendColor = (value) => 
        <span style={{ color: '#fff' }}>{value}</span>
    
    return (
        <PanelChartContainer title={title}>
            <div style={{ width: '100%', height: 280 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            label
                            stroke='#232a33'
                            dataKey="value"
                        >
                            {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend formatter={legendColor} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </PanelChartContainer>
    );
};

export default IncomeAndExpensesChart;