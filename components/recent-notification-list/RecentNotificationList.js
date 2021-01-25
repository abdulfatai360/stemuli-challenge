import Image from 'next/image';
import ShoppingBagIcon from '../../public/images/svgs/bag.svg';
import './RecentNotificationList.css';

function RecentNotificationList() {
    return (
        <section className="recent-notification">
            <h2>Recent Notifications</h2>

            <ul className="recent-notification__list">
                <li className="recent-notification__item">
                    <a href="#">
                        <span className="recent-notification__item__avatar">
                            <Image
                                width={40}
                                height={40}
                                src="/images/avatars/avatar-1.png"
                            />

                            <span className="recent-notification__item__type">
                                <ShoppingBagIcon />
                            </span>
                        </span>

                        <div className="recent-notification__item__description">
                            <h3>Sarah Saunders</h3>
                            <p>Sent you a new message.</p>
                        </div>

                        <time className="recent-notification__item__time">
                            8h
                        </time>
                    </a>
                </li>

                <li className="recent-notification__item">
                    <a href="#">
                        <span className="recent-notification__item__avatar">
                            <Image
                                width={40}
                                height={40}
                                src="/images/avatars/avatar-1.png"
                            />

                            <span className="recent-notification__item__type">
                                <ShoppingBagIcon />
                            </span>
                        </span>

                        <div className="recent-notification__item__description">
                            <h3>Sarah Saunders</h3>
                            <p>Sent you a new message.</p>
                        </div>

                        <time className="recent-notification__item__time">
                            8h
                        </time>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default RecentNotificationList;
