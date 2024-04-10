// BarGraph.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data, colors } from './data';
import style from '../components/style.module.css';

function BarGraph() {
    if (!data || data.length === 0) {
        return (
          <div className={style.error}>
            <h4>Please enter the value</h4>
          </div>
        );
      }
    return (
        <div className={style.bargraph}>
            <h2>Sample graph showing number of new registations made on Referral Yogi portal every month</h2>
            <ResponsiveContainer width="80%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                    <YAxis
                        label={{
                            value: 'New Registrations',
                            angle: -90,
                            position: 'insideLeft',
                            dy: 5
                        }}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill={colors[0]} barSize={40} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarGraph;
