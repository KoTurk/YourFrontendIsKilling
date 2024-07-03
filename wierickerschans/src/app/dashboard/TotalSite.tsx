"use client";

import {co2} from "@tgwf/co2";
import {useEffect, useState} from "react";
import { Text } from '@mantine/core';
import classes from '@/styles/StatsGroup.module.css';

export const TotalSite = () => {
    const [_document, set_document] = useState(null)

        const swd = new co2({model: "swd"})
        const [data, setData] = useState([
            {
                title: '',
                stats: '',
                description: '',
            }])

        useEffect(() => {
            const page_size = (document.documentElement.outerHTML.length)

            const emissions_swd_page_size = swd.perByte(page_size, true).toFixed(6)
            const emissions_swd_page_size_10000_views = swd.perByte(page_size * 10000, true).toFixed(6)
            // get page size in kbytes of html
            const pagebytes = new Blob([document.documentElement.outerHTML]).size
            // covert to mb
            const pagebytes_kb = bToKB(pagebytes)
            const pagebytes_mb = pagebytes / 1000000

            // get

        const data = [
            {
                title: 'This page is ' + page_size + ' bytes',
                stats: emissions_swd_page_size,
                description: 'gCO2 per kWh (swd model)',
            },
            {
                title: 'Second option: This page is ' + page_size + ' kbbytes',
                stats: pagebytes_kb,
                description: 'gCO2 per kWh (swd model)',
            },
            {
                title: '* 10000 views',
                stats: emissions_swd_page_size_10000_views,
                description: 'gCO2 per kWh (swd model)',
            },
        ];
        setData(data)
        }, [])

        const stats = data.map((stat) => (
            <div key={stat.title} className={classes.stat}>
                <Text className={classes.title}>{stat.title}</Text>
                <Text className={classes.count}>{stat.stats.toString()}</Text>
                <Text className={classes.description}>{stat.description}</Text>
            </div>
        ));

    return <div className={classes.root}>{stats}</div>;

}

function bToKB(b: number) { return (Math.round(b / 1024 * 100) / 100) + " KB"; }