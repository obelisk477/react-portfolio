import Navigation from "./Navigation"

const Header = ({currentPage, handlePageChange}) => {

    return (
        <header className="d-flex justify-content-between">
            <h1 className="mx-5">Chad Batten</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
};

export default Header;

