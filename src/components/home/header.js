import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row py-5 text-center justify-content-center">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="#our-story">Our Story</a>
                            {/* <Link to={{
                                pathname: "/",
                                hash: "#our-story"
                            }}>Our Story</Link> */}
                        </li>
                        <li className="nav-item">
                        <span>Our Products</span>
                        </li>
                        <li className="nav-item">
                        <img src="/image/favicon.png" alt=""/>
                        </li>
                        <li className="nav-item">
                        <span>Our Team</span>
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