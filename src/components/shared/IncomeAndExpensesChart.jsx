import React from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from 'recharts';
import PaneContainer from './PaneContainer';
import SpinnerLiquid from './SpinnerLiquid';
import { renderLoader, customLegendColor } from '../../utils/util';

const IncomeAndExpensesChart = ({ title, data, isLoading }) => {
    const COLORS = ['#673ab7', '#9575cd'];    
    
    return (
        <PaneContainer title={title}>
            <div style={{ width: '100%', height: 280 }}>
                { isLoading ? renderLoader(SpinnerLiquid) :
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
                        <Legend formatter={customLegendColor} />
                    </PieChart>
                </ResponsiveContainer>}
            </div>
        </PaneContainer>
    );
};

export default IncomeAndExpensesChart;