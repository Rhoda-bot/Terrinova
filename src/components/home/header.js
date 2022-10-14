const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row py-5 text-center justify-content-center">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                        <h1 className="header--title py-5 ">
                            Profitability & Philanthropy Do Not
                            <br/> Have To Be Parallel Lines.
                        </h1>
                            <p className="header--text">
                            Terrinova has figured out a way
                             to create enterprise from solving one of <br/> Africa’s most pressing food problems. 
                            </p>
                                <button className="header--btn">Partner with Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;