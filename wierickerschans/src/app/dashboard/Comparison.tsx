"use client";

import {co2} from "@tgwf/co2";
import {useEffect, useState} from "react";
import {Text} from '@mantine/core';
import classes from '@/styles/StatsGroup.module.css';
import axios from 'axios';
import { BarChart } from '@mantine/charts';

export const Comparison = () => { {
    const [stateFileSize, setStateFileSize] = useState(0);
    useEffect(() => {
        const fetchState = async () => {
            try {
                const response = await axios.get('/api/state');
                setStateFileSize(response.data);
            } catch (error) {
                console.error('Failed to fetch state:', error);
            }
        };
        fetchState();
    }, [])

    const swd = new co2({model: "swd"})
    let emissions = swd.perVisit(stateFileSize * 10, false)
     // @ts-ignore
    let emissionsToKm = emissions / 92

    const data = [
        {
            title: '1 personal car',
            stats: '150 g CO2/km',
            description: 'gCO2 per kWh',
        },
    ];

    const cars = [
        // { car: 'Nissan LEAF production', CO2: 8000000},
        { car: 'Ford Ranger 2023', CO2: 199},
        { car: 'Average car', CO2: 150},
        { car: 'BMW 1 Series', CO2: 117},
        { car: 'Toyota Yaris Hybrid', CO2: 92},
        { car: 'Our site', CO2: emissions},
        { car: 'Skoda Enyac Electric', CO2: 0}
    ]

    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.count}>{stat.stats.toString()}</Text>
            <Text className={classes.description}>{stat.description}</Text>

            <BarChart
                h={300}
                data={cars}
                dataKey="car"
                type="stacked"
                orientation="vertical"
                series={[
                    { name: 'CO2', color: 'violet.6' },
                ]}
            /><br/>
            <Text className={classes.description}>I can drive {emissionsToKm.toFixed(0)} km with a Toyota Hybrid</Text>
        </div>
    ));
    return <div className={classes.root}>{stats}</div>;
}}