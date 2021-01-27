import Image from 'next/image';
import Button from '../button/Button';
import Chart from '../../libs/chart';
import { chartData, iconProgressData } from './data';

function IconProgress() {
    return (
        <section className="page-widget icon-progress">
            <h2 className="text-lg mb-2">Icon Progress</h2>

            <ul className="icon-progress__list list-unstyled">
                {iconProgressData.map(
                    ({ key, title, previewImg, description }) => (
                        <li
                            key={key}
                            className="icon-progress__item mb-0 d-flex align-items-center gap-3"
                        >
                            <span className="icon-progress__item__img d-flex align-items-center justify-content-center flex-shrink-0 bg-pink-300">
                                <Image
                                    height={40}
                                    width={40}
                                    src={previewImg}
                                />
                            </span>

                            <div className="">
                                <h3 className="text-base m-0 fw-medium">
                                    {title}
                                </h3>
                                <p className="color-secondary mt-0 mb-1 text-xs fw-medium">
                                    {description}
                                </p>
                            </div>

                            <div
                                className="ms-auto d-flex align-items-center justify-content-center position-relative"
                                style={{ height: 110, width: 110 }}
                            >
                                <small className="fw-medium text-sm position-absolute">
                                    {chartData[key].series[0]}%
                                </small>
                                <Chart {...chartData[key]} />
                            </div>
                        </li>
                    )
                )}
            </ul>

            <Button className="button--primary">Discover More</Button>
        </section>
    );
}

export default IconProgress;
