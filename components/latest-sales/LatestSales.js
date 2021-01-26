import Image from 'next/image';
import Button from '../button/Button';

function LatestSales() {
    return (
        <section className="page-widget latest-sales">
            <h2 className="text-lg mb-2">Latest Sales</h2>

            <ul className="latest-sales__list list-unstyled">
                <li className="latest-sales__item py-4 mb-4 d-flex align-items-center gap-3">
                    <span className="latest-sales__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-1.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-semibold">
                            Unity Comps
                        </h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            New 3D Kit
                        </p>
                    </div>

                    <p className="color-green ms-auto fw-semibold">+$35</p>
                </li>

                <li className="latest-sales__item py-4 mb-4 d-flex align-items-center gap-3">
                    <span className="latest-sales__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-3.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-semibold">
                            Unity Comps
                        </h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            New 3D Kit
                        </p>
                    </div>

                    <p className="color-green ms-auto fw-semibold">+$35</p>
                </li>

                <li className="latest-sales__item py-4 mb-4 d-flex align-items-center gap-3">
                    <span className="latest-sales__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                        <Image
                            height={40}
                            width={40}
                            src="/images/others/search-preview-3.png"
                        />
                    </span>

                    <div className="">
                        <h3 className="text-base m-0 fw-semibold">
                            Unity Comps
                        </h3>
                        <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                            New 3D Kit
                        </p>
                    </div>

                    <p className="color-green ms-auto fw-semibold">+$35</p>
                </li>
            </ul>

            <Button className="button--secondary">Show all reports</Button>
        </section>
    );
}

export default LatestSales;
