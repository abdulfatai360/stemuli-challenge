import './DropdownMenu.css';

function DropdownMenu({ children, className }) {
    return (
        <section className={['custom-dropdown-menu', className].join(' ')}>
            {children}
        </section>
    );
}

export default DropdownMenu;
