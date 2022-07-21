import React from 'react'
import '../Stylesheets/Radar.css';
import Chart from 'chart.js/auto';
import Utils from 'chart.js/types/utils'
import Draw from "../Scripts/Draw";


function Radar(props: any) {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = ["1", "2", "3", "4", "5", "6", "7"];
    const CHART_COLORS = {
        red: 'rgb(255, 108, 100)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(0, 255, 255)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    const transparentize = function (r: any, g: any, b: any, alpha: number) {
        const a = (1 - alpha) * 255;
        const calc = (x: number) => Math.round((x - a) / alpha);

        return `rgba(${calc(r)}, ${calc(g)}, ${calc(b)}, ${alpha})`;
    }

    setTimeout(() => {
        const ctx = document.getElementById('chart');
        // @ts-ignore
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [12, 19, 9, 5, 15, 10, 11],
                        borderColor: CHART_COLORS.red,
                        backgroundColor: transparentize(255, 108, 100, 0.3),
                    },
                    {
                        label: 'Dataset 2',
                        data: [13, 16, 9, 7, 11, 8, 9],
                        borderColor: CHART_COLORS.blue,
                        backgroundColor: transparentize(0, 255, 255, 0.3),
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Radar Chart'
                    }
                },
                scale: {
                    ticks: {
                        maxTicksLimit: 1
                    },
                }
            },
        })
    }, 10)

    return (
        <div className="chart-container">
            <canvas id="chart" width="400" height="400"></canvas>
        </div>
    )
}

export default Radar
