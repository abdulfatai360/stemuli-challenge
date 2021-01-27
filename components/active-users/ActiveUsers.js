import Image from 'next/image';
import Chart, { colors, defaultOptions } from '../../libs/chart';
import ArrowDownIcon from '../../public/images/icons/bordered-arrow-down.svg';
import CloseIcon from '../../public/images/icons/close.svg';
import './ActiveUsers.css';

const lineChart = {
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
        colors: [colors.purple],
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        grid: {
            borderColor: colors.lightgray,
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

const barChart = {
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
        colors: [colors.white, colors.lightgray],
        chart: {
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        grid: {
            borderColor: colors.lightgray,
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
                color: colors.lightgray,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                style: {
                    colors: colors.white,
                },
            },
        },
    },
    ...defaultOptions,
};

function ActiveUsers() {
    return (
        <section className="page-widget active-users">
            <h2 className="text-lg mb-4">Active Users Right Now 💡</h2>

            <div className="row">
                <div className="col-12 col-md-3 mb-3">
                    <div className="row">
                        <div className="col col-md-12 pb-4 border-bottom-sm-scr">
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

                        <div className="col col-md-8 pt-4">
                            <div style={{ height: 75 }}>
                                <Chart {...lineChart} />
                            </div>

                            <p className="text-xs color-tertiary">
                                Update your payout method in Settings
                            </p>
                        </div>

                        <div className="col-2 py-4 d-flex align-self-start gap-1">
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

                <div className="col-12 col-md-9 mb-3">
                    <div
                        className="p-2 position-relative"
                        style={{
                            backgroundColor: '#3F8CFF',
                            borderRadius: '1rem',
                            height: '100%',
                        }}
                    >
                        <Chart {...barChart} />
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
                            <li className="active-users__stat__item p-4 col-6 col-md">
                                <p className="mb-3 fw-medium color-tertiary text-xs d-flex gap-2">
                                    <div
                                        style={{ width: 16, height: 16 }}
                                        className="rounded bg-purple d-flex align-items-center justify-content-center p-1 text-white"
                                    />
                                    Users
                                </p>
                                <h3 className="fw-semibold">36k</h3>
                                <div className="active-users__progress active-users__progress--users"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md">
                                <p className="mb-3 fw-medium color-tertiary text-xs d-flex gap-2">
                                    <div
                                        style={{ width: 16, height: 16 }}
                                        className="rounded bg-pink d-flex align-items-center justify-content-center p-1 text-white"
                                    />
                                    Clicks
                                </p>
                                <h3 className="fw-semibold">1m</h3>
                                <div className="active-users__progress active-users__progress--clicks"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md">
                                <p className="mb-3 fw-medium color-tertiary text-xs d-flex gap-2">
                                    <div
                                        style={{ width: 16, height: 16 }}
                                        className="rounded bg-blue d-flex align-items-center justify-content-center p-1 text-white"
                                    />
                                    Sales
                                </p>
                                <h3 className="fw-semibold">327$</h3>
                                <div className="active-users__progress active-users__progress--sales"></div>
                            </li>

                            <li className="active-users__stat__item p-4 col-6 col-md">
                                <p className="mb-3 fw-medium color-tertiary text-xs d-flex gap-2">
                                    <div
                                        style={{ width: 16, height: 16 }}
                                        className="rounded bg-yellow d-flex align-items-center justify-content-center p-1 text-white"
                                    />
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
