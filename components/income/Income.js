import Chart, { colors, defaultOptions } from '../../libs/chart';
import Button from '../button/Button';

const { blue, purple, lightgray } = colors;

const chartData = {
    height: '100%',
    type: 'bar',
    series: [
        {
            name: '',
            data: [95, 66, 44],
        },
        {
            name: '',
            data: [72, 48, 38],
        },
    ],
    options: {
        labels: ['Oct', 'Mar', 'Aug'],
        colors: [purple, blue],
        chart: {
            toolbar: {
                show: false,
            },
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.9,
                },
            },
        },
        grid: {
            borderColor: lightgray,
            strokeDashArray: 0,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                left: 15,
                right: 0,
                bottom: 0,
            },
        },
        stroke: {
            curve: 'smooth',
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            shared: true,
        },
        xaxis: {
            axisBorder: {
                show: false,
                color: lightgray,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        ...defaultOptions,
    },
};

function Income() {
    return (
        <section className="page-widget page-widget--purple income d-flex flex-column">
            <h2 className="text-lg mb-2 ps-4">Income</h2>

            <div
                className="bg-white flex-fill p-4 px-3"
                style={{ borderRadius: '1rem' }}
            >
                <div style={{ height: 200 }}>
                    <Chart {...chartData} />
                </div>

                <Button className="button--primary mt-3">
                    Withdraw Earning
                </Button>
            </div>
        </section>
    );
}

export default Income;
