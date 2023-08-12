function Navigation({ currentPage, handlePageChange }) {
    const pages = ['About Me', 'Contact', 'Portfolio', 'Resume']

    // Map individual pages to tabs, where tab clicks change the page state
    return (
        <nav className="">
            <ul className="nav nav-pills">
                {pages.map((page) => (
                    <li className="nav-pills px-2" key={page}>
                        <a
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'nav-link active' : 'nav-link'}
                        >
                        {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    );
  }

export default Navigation