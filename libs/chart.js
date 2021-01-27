import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const colors = {
    red: '#FF754C',
    blue: '#A0D7E7',
    green: '#7FBA7A',
    gray: '#808191',
    purple: '#6C5DD3',
    white: '#ffffff',
    lightgray: '#E4E4E4',
    lightergray: '#f2f2f2',
};

const defaultOptions = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    fontWeight: 500,
};

export { Chart as default, defaultOptions, colors };
