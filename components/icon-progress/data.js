import { colors, defaultOptions } from '../../libs/chart';

const { purple, red, green, lightergray } = colors;

export const chartData = {
    unityComps: {
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
                        background: lightergray,
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
    },
    folioDesigner: {
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
                        background: lightergray,
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
    },
    folioAgency: {
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
                        background: lightergray,
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
    },
};

export const iconProgressData = [
    {
        key: 'unityComps',
        title: 'Unity Comps',
        previewImg: '/images/others/search-preview-1.png',
        description: ' New 3D Kit',
    },
    {
        key: 'folioDesigner',
        title: 'Folio Designer',
        previewImg: '/images/others/search-preview-2.png',
        description: ' UI Design Kit',
    },
    {
        key: 'folioAgency',
        title: 'Folio Agency',
        previewImg: '/images/others/search-preview-3.png',
        description: ' UI Design Kit',
    },
];
