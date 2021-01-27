import Chart, { colors, defaultOptions } from '../../libs/chart';

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
        labels: ['Graphics', 'Theme', 'Template'],
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
                    show: true,
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

function AffiliateImpressions() {
    return (
        <section className="page-widget page-widget--light affiliate-impressions">
            <h2 className="text-lg mb-2">Affiliate Impressions</h2>

            <div className="" style={{ height: 360 }}>
                <Chart {...chartData} />
            </div>
        </section>
    );
}

export default AffiliateImpressions;
