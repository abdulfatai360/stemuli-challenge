import { useRef } from 'react';
import Image from 'next/image';
import SearchForm from '../search-form/SearchForm';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import BellIcon from '../../public/images/icons/bell.svg';
import BurgerIcon from '../../public/images/icons/burger.svg';
import RecentNotificationList from '../recent-notification-list/RecentNotificationList';
import './Header.css';

function Header() {
    const searchFormRef = useRef();
    const notificationRef = useRef();

    function handleNotificationToggle() {
        searchFormRef.current.classList.remove('search-form--is-input-visible');

        notificationRef.current.classList.toggle(
            'header__topbar__notification--is-open'
        );
    }

    return (
        <header className="header">
            <div className="header__welcome-msg">
                <p>Hi Dash UI8,</p>
                <h1>Campaigns</h1>
            </div>

            <div className="header__topbar">
                <div className="header__topbar__inner">
                    <BurgerIcon
                        role="button"
                        className="header__topbar__burger"
                    />

                    <SearchForm
                        searchFormRef={searchFormRef}
                        notificationRef={notificationRef}
                    />

                    <span
                        ref={notificationRef}
                        role="button"
                        className="header__topbar__notification"
                        onClick={handleNotificationToggle}
                    >
                        <BellIcon />
                        <span>2</span>
                        <div className="header__topbar__notification__dropdown">
                            <DropdownMenu>
                                <RecentNotificationList />
                            </DropdownMenu>
                        </div>
                    </span>

                    <Image
                        width={40}
                        height={40}
                        src="/images/avatars/avatar-2.png"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
