import Chart, { defaultOptions } from '../../libs/chart';

var blue = '#A0D7E7';
var blueLight = '#0e97b5';
var purple = '#6C5DD3';
var white = '#ffffff';
// var blueOpacity = '#e6efff';
// var blueLight = '#50B5FF';
var pink = '#FFB7F5';
// var orangeOpacity = '#fff5ed';
var yellow = '#FFCE73';
var green = '#7FBA7A';
var red = '#FF754C';
// var greenOpacity = '#ecfbf5';
var gray = '#808191';
var grayOpacity = '#f2f2f2';
// var grayLight = '#E2E2EA';
var borderColor = '#E4E4E4';
// var text = "#171725";

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
            borderColor: borderColor,
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
