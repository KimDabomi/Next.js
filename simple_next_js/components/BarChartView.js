import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartView = ({labels,dataset,legend}) => {
    // 그래프 옵션
    const options = {
        indexAxis: 'x',
        responsive: true
    };

    // 막대그래프
    const data = {
        labels: labels,
        datasets: [{
            label: legend,
            backgroundColor: '#0066ff44',
            borderColor: '#0066ff',
            borderWidth: 1,
            data: dataset
        }]
    };

    return ((labels && dataset) && <Bar data={data} options={options} />);
};

BarChartView.dafaultProps = {
    labels: [],
    dataset: [],
    legend: ''
}

export default BarChartView;