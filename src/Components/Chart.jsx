import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { year: "2015", mealsServed: 20000, familiesServed: 10000 },
    { year: "2016", mealsServed: 25000, familiesServed: 12000 },
    { year: "2017", mealsServed: 28000, familiesServed: 15000 },
    { year: "2018", mealsServed: 30000, familiesServed: 16000 },
    { year: "2019", mealsServed: 32000, familiesServed: 18000 },
    { year: "2020", mealsServed: 35000, familiesServed: 20000 },
    { year: "2021", mealsServed: 38000, familiesServed: 22000 },
    { year: "2022", mealsServed: 40000, familiesServed: 24000 },
    { year: "2023", mealsServed: 42000, familiesServed: 26000 },
    { year: "2024", mealsServed: 45000, familiesServed: 28000 }
];

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mealsServed" fill="#8884d8" name="Meals Served" />
                <Bar dataKey="familiesServed" fill="#82ca9d" name="Families Served" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
