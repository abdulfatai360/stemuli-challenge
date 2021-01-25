import Image from 'next/image';
import Button from '../button/Button';
import './RecentSearchList.css';

function RecentSearchList() {
    return (
        <section className="recent-search">
            <h2>Recent Searches</h2>

            <ul className="recent-search__list">
                <li className="recent-search__item">
                    <span className="recent-search__item__img">
                        <Image
                            width={40}
                            height={40}
                            src="/images/others/search-preview-1.png"
                        />
                    </span>

                    <p className="recent-search__item__description">
                        Earning by items...
                    </p>
                </li>

                <li className="recent-search__item">
                    <span className="recent-search__item__img">
                        <Image
                            width={40}
                            height={40}
                            src="/images/others/search-preview-2.png"
                        />
                    </span>

                    <p className="recent-search__item__description">
                        This month's statements...
                    </p>
                </li>

                <li className="recent-search__item">
                    <span className="recent-search__item__img">
                        <Image
                            width={40}
                            height={40}
                            src="/images/others/search-preview-3.png"
                        />
                    </span>

                    <p className="recent-search__item__description">
                        How many sales I got...
                    </p>
                </li>
            </ul>

            <Button className="btn--purple">Advance Search</Button>
        </section>
    );
}

export default RecentSearchList;
