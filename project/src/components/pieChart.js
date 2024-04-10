import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { data, colors} from  './data';
import style from  "./style.module.css";

function PieCharts () {
    if (!data || data.length === 0) {
        return (
          <div className={style.error}>
            <h4>Please enter the value</h4>
          </div>
        );
      }
    return (
        <div className={style.piechart}>
            <h2>Sample graph showing number of new registations made on Referral Yogi portal month</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieCharts;
