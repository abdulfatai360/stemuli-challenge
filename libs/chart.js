import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

var gray = '#808191';

const defaultOptions = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    foreColor: gray,
};

export { Chart as default, defaultOptions };
// import("react-apexcharts").then(({default}) =>  )
