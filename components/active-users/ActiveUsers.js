import Image from 'next/image';
import Chart, { defaultOptions } from '../../libs/chart';
import ArrowDownIcon from '../../public/images/icons/bordered-arrow-down.svg';
import CloseIcon from '../../public/images/icons/close.svg';
import './ActiveUsers.css';

var purple = '#6C5DD3';
var white = '#ffffff';
var borderColor = '#E4E4E4';

const activeUserGraphChartData = {
    type: 'line',
    height: '100%',
    series: [
        {
            name: 'Active users',
            data: [442, 380, 275, 430, 509, 463, 407, 533, 470],
        },
    ],
    options: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        colors: [purple],
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        grid: {
            borderColor: borderColor,
            strokeDashArray: 0,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
    },
    ...defaultOptions,
};

const activeUserStackedGraphData = {
    height: '100%',
    type: 'bar',
    series: [
        {
            name: 'New users',
            data: [400, 380, 240, 280, 390, 330, 175],
        },
        {
            name: 'Users',
            data: [100, 0, 0, 0, 60, 0, 20],
        },
    ],
    options: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
        colors: [white, borderColor],
        chart: {
            stacked: true,
            toolbar: {
                show: false,
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
                left: 10,
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
                endingShape: 'rounded',
                columnWidth: '10%',
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                show: false,
            },
            shared: true,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            axisBorder: {
                color: borderColor,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                style: {
                    colors: white,
                },
            },
        },
    },
    ...defaultOptions,
};

function ActiveUsers() {
    return (
        <section className="page-widget active-users">
            <h2 className="text-lg mb-2">Active Users Right Now 💡</h2>

            <div className="row">
                <div className="col-12 col-md-4 mb-3">
                    <div className="row">
                        <div className="col col-md-12 mb-4">
                            <h2
                                className="m-0 mb-1 fw-semibold"
                                style={{ fontSize: '3.5rem' }}
                            >
                                478
                            </h2>
                            <div className="d-flex align-items-center gap-3">
                                <Image
                                    width={32}
                                    height={32}
                                    src="/images/others/active-users.png"
                                />
                                <span
                                    className="text-xs"
                                    style={{ color: '#5F75EE' }}
                                >
                                    Page views per minute
                                </span>
                            </div>
                        </div>

                        <div className="col col-md-9">
                            <div style={{ height: 75 }}>
                                <Chart {...activeUserGraphChartData} />
                            </div>

                            <p className="text-xs color-tertiary">
                                Update your payout method in Settings
                            </p>
                        </div>

                        <div className="col-2 d-flex align-self-start gap-1">
                            <div
                                style={{
                                    backgroundColor: '#3F8CFF',
                                    width: 16,
                                    height: 16,
                                }}
                                className="d-flex align-items-center justify-content-center rounded-circle"
                            >
                                <ArrowDownIcon />
                            </div>
                            <span
                                className="text-xs"
                                style={{ color: '#5F75EE' }}
                            >
                                16%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-8 mb-3">
                    <div
                        className="p-2 position-relative"
                        style={{
                            backgroundColor: '#3F8CFF',
                            borderRadius: '1rem',
                            height: 200,
                        }}
                    >
                        <Chart {...activeUserStackedGraphData} />
                        <div
                            className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                            style={{
                                width: 24,
                                height: 24,
                                top: 10,
                                right: 10,
                                cursor: 'pointer',
                            }}
                        >
                            <CloseIcon />
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="active-users__stat px-3 mt-4">
                        <ul className="active-users__stat__list row list-unstyled mb-0">
                            <li className="active-users__stat__item p-4 col-6 col-md border-bottom border-bottom-md-0 border-end">
                                <p className="mb-3 fw-medium color-tertiary text-xs">
                                    Users
                                </p>
                                <h3 className="fw-semibold">36k</h3>
                                <div className="active-users__progress active-users__progress--users"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md border-bottom border-bottom-md-0">
                                <p className="mb-3 fw-medium color-tertiary text-xs">
                                    Clicks
                                </p>
                                <h3 className="fw-semibold">1m</h3>
                                <div className="active-users__progress active-users__progress--clicks"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md border-end">
                                <p className="mb-3 fw-medium color-tertiary text-xs">
                                    Sales
                                </p>
                                <h3 className="fw-semibold">327$</h3>
                                <div className="active-users__progress active-users__progress--sales"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md">
                                <p className="mb-3 fw-medium color-tertiary text-xs">
                                    Items
                                </p>
                                <h3 className="fw-semibold">68</h3>
                                <div className="active-users__progress active-users__progress--items"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ActiveUsers;
