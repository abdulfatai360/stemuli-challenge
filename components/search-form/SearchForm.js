import SearchIcon from '../../public/images/icons/search.svg';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import RecentSearchList from '../recent-search-list/RecentSearchList';
import './SearchForm.css';

function SearchForm({ searchFormRef, notificationRef }) {
    function handleInputToggle() {
        notificationRef.current.classList.remove(
            'header__topbar__notification--is-open'
        );
        searchFormRef.current.classList.toggle('search-form--is-input-visible');
    }

    function handleRecentSearchToggle() {
        notificationRef.current.classList.remove(
            'header__topbar__notification--is-open'
        );
        searchFormRef.current.classList.toggle(
            'search-form--is-rsearch-visible'
        );
    }

    return (
        <form
            ref={searchFormRef}
            className="search-form"
            onSubmit={(e) => e.preventDefault()}
        >
            <span
                role="button"
                className="search-form__icon"
                onClick={handleInputToggle}
            >
                <SearchIcon />
            </span>

            <input
                autoFocus={false}
                type="search"
                className="search-form__input"
                placeholder="Search"
                onFocus={handleRecentSearchToggle}
                onBlur={handleRecentSearchToggle}
            />

            <div className="search-form__dropdown">
                <DropdownMenu>
                    <RecentSearchList />
                </DropdownMenu>
            </div>
        </form>
    );
}

export default SearchForm;
