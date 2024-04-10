import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data, colors } from './data';
import style from '../components/style.module.css';

function LineGraph() {
    if (!data || data.length === 0) {
        return (
          <div className={style.error}>
            <h4>Please enter the value</h4>
          </div>
        );
      }
    return (
        <div className={style.linegraph} >
            <h2>Sample graph showing number of new registations made on Referral Yogi portal every month</h2>
            <ResponsiveContainer width="80%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label = {{ value: 'Month', position: 'insideBottom', offset: '-3' }} />
                    <YAxis
                            label={{
                                value: 'New Registrations',
                                angle: -90,
                                position: 'insideLeft',
                                dy: 5
                            }}
                    />
                    <Tooltip />
                    {/* {colors.map((color, index) => (
                        <Line key={`line-${index}`} type="monotone" dataKey={color.key} stroke={color.value} />
                    ))} */}
                    <Line dataKey="value" fill={colors[0]} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineGraph;
