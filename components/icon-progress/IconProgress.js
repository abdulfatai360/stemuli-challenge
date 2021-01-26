import Image from 'next/image';
import Button from '../button/Button';
import Chart, { defaultOptions } from '../../libs/chart';

var purple = '#6C5DD3';
var green = '#7FBA7A';
var red = '#FF754C';
var grayOpacity = '#f2f2f2';

const unityCompsChart = {
    series: [40],
    height: '100%',
    type: 'radialBar',
    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '65%',
                },
                track: {
                    background: grayOpacity,
                    margin: 0,
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        fill: {
            colors: purple,
        },
        ...defaultOptions,
    },
};

const folioDesignerChart = {
    series: [62],
    type: 'radialBar',
    height: '100%',
    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '65%',
                },
                track: {
                    background: grayOpacity,
                    margin: 0,
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        fill: {
            colors: green,
        },
        ...defaultOptions,
    },
};

const folioAgencyChart = {
    series: [75],
    height: '100%',
    type: 'radialBar',

    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '65%',
                },
                track: {
                    background: grayOpacity,
                    margin: 0,
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        fill: {
            colors: red,
        },
        ...defaultOptions,
    },
};

function IconProgress() {
    return (
        <section className="page-widget icon-progress">
            <h2 className="text-lg mb-2">Icon Progress</h2>

            <ul className="icon-progress__list list-unstyled">
                <li className="icon-progress__item mb-0 d-flex align-items-center gap-3">
                    <span className="icon-progress__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-1.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-medium">Unity Comps</h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            New 3D Kit
                        </p>
                    </div>

                    <div
                        className="ms-auto d-flex align-items-center justify-content-center"
                        style={{ height: 110, width: 110 }}
                    >
                        <Chart {...unityCompsChart} />
                    </div>
                </li>

                <li className="icon-progress__item mb-0 d-flex align-items-center gap-3">
                    <span className="icon-progress__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-3.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-medium">
                            Folio Designer
                        </h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            UI Design Kit
                        </p>
                    </div>

                    <div
                        className="ms-auto d-flex align-items-center justify-content-center"
                        style={{ height: 110, width: 110 }}
                    >
                        <Chart {...folioDesignerChart} />
                    </div>
                </li>

                <li className="icon-progress__item mb-0 d-flex align-items-center gap-3">
                    <span className="icon-progress__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-3.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-medium">
                            Folio Agency
                        </h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            UI Design Kit
                        </p>
                    </div>

                    <div
                        className="ms-auto d-flex align-items-center justify-content-center"
                        style={{ height: 110, width: 110 }}
                    >
                        <Chart {...folioAgencyChart} />
                    </div>
                </li>
            </ul>

            <Button className="button--primary">Discover More</Button>
        </section>
    );
}

export default IconProgress;
