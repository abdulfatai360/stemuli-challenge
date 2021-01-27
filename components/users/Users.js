import Chart, { colors, defaultOptions } from '../../libs/chart';

const { blue, purple, lightgray } = colors;

const totalUsersChart = {
    height: '100%',
    type: 'bar',
    series: [
        {
            name: '',
            data: [35, 66, 34, 56, 18],
        },
    ],
    options: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        colors: [blue],
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        grid: {
            borderColor: lightgray,
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
        stroke: {
            curve: 'smooth',
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
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

const newUserChart = {
    type: 'bar',
    height: '100%',
    series: [
        {
            name: '',
            data: [25, 46, 64, 56, 28],
        },
    ],
    options: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
            borderColor: lightgray,
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
        stroke: {
            curve: 'smooth',
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
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

function Users() {
    return (
        <section className="page-widget users">
            <h2 className="text-lg mb-2">Users</h2>

            <section className="py-4 d-flex justify-content-between border-bottom border-muted">
                <div>
                    <h3 className="mb-0 color-tertiary text-xs">Total Users</h3>
                    <p className="mb-0 fw-medium fs-2 text">57m</p>
                    <p className="mb-0 fw-semibold color-green text-sm">
                        21.77%
                    </p>
                </div>

                <div style={{ width: 120, height: 80 }}>
                    <Chart {...totalUsersChart} />
                </div>
            </section>

            <section className="py-4 d-flex justify-content-between border-bottom border-muted">
                <div>
                    <h3 className="mb-0 color-tertiary text-xs">New Users</h3>
                    <p className="mb-0 fw-medium fs-2 text">36k</p>
                    <p className="mb-0 fw-semibold color-green text-sm">
                        21.77%
                    </p>
                </div>

                <div style={{ width: 120, height: 80 }}>
                    <Chart {...newUserChart} />
                </div>
            </section>

            <div className="pt-2 d-block text-center">
                <a
                    href="#"
                    className="text-sm fw-semibold color-purple cursor-pointer"
                >
                    Go to setting
                </a>
            </div>
        </section>
    );
}

export default Users;
