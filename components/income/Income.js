import Chart, { defaultOptions } from '../../libs/chart';
import Button from '../button/Button';

var blue = '#A0D7E7';
var purple = '#6C5DD3';
var borderColor = '#E4E4E4';

const incomeChartData = {
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
            borderColor: borderColor,
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
                color: borderColor,
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
                    <Chart {...incomeChartData} />
                </div>

                <Button className="button--primary mt-3">
                    Withdraw Earning
                </Button>
            </div>
        </section>
    );
}

export default Income;
