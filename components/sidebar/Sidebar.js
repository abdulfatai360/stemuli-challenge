import Image from 'next/image';
import Button from '../button/Button';
import PrimaryNav from '../primary-nav/PrimaryNav';
import SecondaryNav from '../secondary-nav/SecondaryNav';
import BurgerIcon from '../../public/images/icons/burger.svg';
import UpDownArrow from '../../public/images/svgs/up-down-arrow.svg';
import './Sidebar.css';

function Sidebar({ sidebarRef, onSidebarToggle }) {
    return (
        <section ref={sidebarRef} className="sidebar">
            <div className="sidebar__topbar px-2 px-xl-3">
                <div className="sidebar__topbar__logo-black">
                    <Image
                        width={140}
                        height={37}
                        src="/images/others/brand-logo-black.png"
                    />
                </div>

                <BurgerIcon
                    role="button"
                    className="sidebar__topbar__burger"
                    onClick={onSidebarToggle}
                />
            </div>

            <div className="sidebar__nav px-2 px-xl-3">
                <a
                    href="#"
                    className="sidebar__nav__logo d-flex align-items-center my-3"
                >
                    <Image
                        width={98}
                        height={48}
                        src="/images/others/brand-logo-sm.png"
                    />
                </a>

                <nav className="sidebar__nav--primary">
                    <p className="fw-medium text-xs px-4 py-3">
                        Admin <span className="d-none d-xl-inline">tools</span>
                    </p>

                    <PrimaryNav />
                </nav>

                <div className="sidebar__nav__divider my-5"></div>

                <nav className="sidebar__nav--secondary">
                    <p className="fw-medium text-xs px-4">Insights</p>

                    <SecondaryNav />
                </nav>
            </div>

            <div className="my-5 px-2 px-xl-3">
                <div className="sidebar__cta d-none d-xl-block">
                    <Image
                        width={199}
                        height={199}
                        src="/images/others/sidebar-preview.png"
                        alt=""
                    />

                    <Button className="button--tertiary">Get Pro Now</Button>
                </div>
            </div>

            <div className="my-5 px-2 px-xl-3 pb-5">
                <div className="sidebar__user-profile d-flex align-items-center gap-2 p-2">
                    <div className="sidebar__user-profile__avatar flex-shrink-0">
                        <Image
                            width={40}
                            height={40}
                            src="/images/avatars/avatar-2.png"
                        />
                    </div>

                    <div className="sidebar__user-profile__info d-none d-xl-flex">
                        <p className="mb-0 fw-semibold text-sm">Dash UI8</p>
                        <p className="mb-0 fw-semibold color-secondary text-xs">
                            Free account
                        </p>
                    </div>

                    <UpDownArrow className="sidebar__user-profile__icon ms-auto d-none d-xl-flex" />
                </div>
            </div>

            <div className="sidebar__footer"></div>
        </section>
    );
}

export default Sidebar;
