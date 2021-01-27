import Overview from '../../public/images/navicons/overview.svg';
import Products from '../../public/images/navicons/products.svg';
import Campaigns from '../../public/images/navicons/campaigns.svg';
import Schedules from '../../public/images/navicons/schedules.svg';
import Payouts from '../../public/images/navicons/payouts.svg';
import Statement from '../../public/images/navicons/statement.svg';
import Settings from '../../public/images/navicons/settings.svg';

const routes = [
    {
        icon: <Overview />,
        title: 'Overview',
        link: '#',
    },
    {
        icon: <Products />,
        title: 'Products',
        link: '#',
    },
    {
        icon: <Campaigns />,
        title: 'Campaigns',
        link: '/',
    },
    {
        icon: <Schedules />,
        title: 'Schedules',
        link: '#',
    },
    {
        icon: <Payouts />,
        title: 'Payouts',
        link: '#',
    },
    {
        icon: <Statement />,
        title: 'Statement',
        link: '#',
    },
    {
        icon: <Settings />,
        title: 'Settings',
        link: '#',
    },
];

function PrimaryNav() {
    return (
        <ul className="sidebar__nav--primary__list list-unstyled mb-0">
            {routes.map((route) => (
                <li key={route.title}>
                    <a
                        href={route.link}
                        data-current={route.link === '/'}
                        className="d-flex align-items-center justify-content-center gap-3 px-3 py-3 text-sm fw-semibold"
                    >
                        <span className="flex-shrink-0">{route.icon}</span>
                        <span className="d-none d-xl-flex">{route.title}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default PrimaryNav;
