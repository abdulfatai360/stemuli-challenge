import ItemCount from '../item-count/ItemCount';
import Inbox from '../../public/images/navicons/inbox.svg';
import Notifications from '../../public/images/icons/bell.svg';
import Comments from '../../public/images/navicons/comments.svg';

const routes = [
    {
        icon: <Inbox />,
        title: 'Inbox',
        link: '#',
        count: 10,
    },
    {
        icon: <Notifications />,
        title: 'Notifications',
        link: '#',
        count: 2,
    },
    {
        icon: <Comments />,
        title: 'Comments',
        link: '#',
        count: 20,
    },
];

function SecondaryNav() {
    return (
        <ul className="sidebar__nav--secondary__list list-unstyled mb-0">
            {routes.map((route) => (
                <li key={route.title}>
                    <a
                        href={route.link}
                        className="position-relative d-flex align-items-center justify-content-center gap-3 px-3 py-3 text-sm fw-semibold"
                    >
                        <span className="flex-shrink-0">{route.icon}</span>
                        <span className="d-none d-xl-flex">{route.title}</span>
                        <span className="ms-auto">
                            <ItemCount value={route.count} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SecondaryNav;
