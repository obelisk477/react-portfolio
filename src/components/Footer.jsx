function Footer() {

    const handleClick = (e) => {
        window.open(e.target.dataset.href)

    }

    return(
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">

            <ul className="nav col-md-4 justify-content-between list-unstyled d-flex">
                <img src="github.png" data-href="https://github.com/obelisk477" onClick={handleClick}></img>
                <img src="linkedIn.png"data-href="https://www.github.com" onClick={handleClick}></img>
                <img src="LeetCode.png" data-href="https://leetcode.com/cwbatte2/" onClick={handleClick}></img>
            </ul>
        </footer>
    )
}

export default Footer