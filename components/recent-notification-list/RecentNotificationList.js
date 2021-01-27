import Image from 'next/image';
import ShoppingBagIcon from '../../public/images/svgs/bag.svg';
import Button from '../button/Button';
import './RecentNotificationList.css';

const data = [
    {
        actorAvatar: '/images/avatars/avatar-1.png',
        actor: 'Sarah Saunders',
        action: 'Sent you a new message.',
        time: '8h',
    },
    {
        actorAvatar: '/images/avatars/avatar-1.png',
        actor: 'Sarah Saunders',
        action: 'Sent you a new message.',
        time: '8h',
    },
    {
        actorAvatar: '/images/avatars/avatar-1.png',
        actor: 'Sarah Saunders',
        action: 'Sent you a new message.',
        time: '8h',
    },
];

function RecentNotificationList() {
    return (
        <section className="recent-notification">
            <h2 className="fw-medium text-lg mb-3 ps-2">
                Recent Notifications
            </h2>

            <ul className="recent-notification__list list-unstyled mb-0">
                {data.map(({ actor, actorAvatar, action, time }, i) => (
                    <li key={i} className="recent-notification__item mb-2">
                        <a href="#" className="d-flex gap-3 px-3 py-3">
                            <span className="position-relative flex-shrink-0">
                                <Image
                                    width={40}
                                    height={40}
                                    src={actorAvatar}
                                />

                                <span className="recent-notification__item__type">
                                    <ShoppingBagIcon />
                                </span>
                            </span>

                            <div className="recent-notification__item__description">
                                <h3 className="text-sm fw-semibold mb-0">
                                    {actor}
                                </h3>
                                <p className="text-sm fw-medium color-tertiary mb-0">
                                    {action}
                                </p>
                            </div>

                            <time className="text-sm fw-semibold color-tertiary ms-auto">
                                {time}
                            </time>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="w-75 mx-auto">
                <Button className="button--primary my-3 mb-4">
                    See all incoming actvity
                </Button>
            </div>
        </section>
    );
}

export default RecentNotificationList;
