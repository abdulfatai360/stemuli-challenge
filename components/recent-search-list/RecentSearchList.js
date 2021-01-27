import Image from 'next/image';
import Button from '../button/Button';
import './RecentSearchList.css';

const data = [
    {
        description: 'Earning by items...',
        avatar: '/images/others/search-preview-1.png',
        bgColor: 'bg-pink',
    },
    {
        description: "This month's statements...",
        avatar: '/images/others/search-preview-2.png',
        bgColor: 'bg-yellow',
    },
    {
        description: 'How many sales I got...',
        avatar: '/images/others/search-preview-3.png',
        bgColor: 'bg-blue',
    },
];

function RecentSearchList() {
    return (
        <section className="recent-search">
            <h2 className="color-tertiary text-xs fw-medium mt-0">
                Recent Searches
            </h2>

            <ul className="recent-search__list list-unstyled mb-3">
                {data.map(({ description, avatar, bgColor }, i) => (
                    <li
                        key={i}
                        className="recent-search__item d-flex align-items-center gap-2 py-3"
                    >
                        <span
                            className={`recent-search__item__img flex-shrink-0 d-flex align-items-center justify-content-center ${bgColor}`}
                        >
                            <Image width={40} height={40} src={avatar} />
                        </span>

                        <p className="fw-semibold text-sm mb-0">
                            {description}
                        </p>
                    </li>
                ))}
            </ul>

            <Button className="button--primary">Advance Search</Button>
        </section>
    );
}

export default RecentSearchList;
