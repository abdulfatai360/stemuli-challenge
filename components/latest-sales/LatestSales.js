import Image from 'next/image';
import Button from '../button/Button';

const latestSalesData = [
    {
        key: 'unityComps',
        title: 'Unity Comps',
        previewImg: '/images/others/search-preview-1.png',
        description: ' New 3D Kit',
        value: 35,
    },
    {
        key: 'folioDesigner',
        title: 'Folio Designer',
        previewImg: '/images/others/search-preview-2.png',
        description: ' UI Design Kit',
        value: 35,
    },
    {
        key: 'folioAgency',
        title: 'Folio Agency',
        previewImg: '/images/others/search-preview-3.png',
        description: ' UI Design Kit',
        value: 35,
    },
];

function LatestSales() {
    return (
        <section className="page-widget latest-sales">
            <h2 className="text-lg mb-2">Latest Sales</h2>

            <ul className="latest-sales__list list-unstyled">
                {latestSalesData.map(
                    ({ key, title, previewImg, description, value }) => (
                        <li
                            key={key}
                            className="latest-sales__item py-4 mb-4 d-flex align-items-center gap-3"
                        >
                            <span className="latest-sales__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                                <Image
                                    height={40}
                                    width={40}
                                    src={previewImg}
                                />
                            </span>

                            <div className="">
                                <h3 className="text-base m-0 fw-semibold">
                                    {title}
                                </h3>
                                <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                                    {description}
                                </p>
                            </div>

                            <p className="color-green ms-auto fw-semibold">
                                +${value}
                            </p>
                        </li>
                    )
                )}
            </ul>

            <Button className="button--secondary">Show all reports</Button>
        </section>
    );
}

export default LatestSales;
