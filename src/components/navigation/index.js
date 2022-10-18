const NavigationBar = () => {
    return(
        <>
            <div className="nav">
                <img src="/image/terrinova.png" alt="terriniva logo" className="nav__logo" />

                <ul className="nav__menu">
                    <li className="nav__menu--link">
                        <a href="#story">Our Story</a>
                    </li>
                    <li className="nav__menu--link">
                        <a href="#products">Our Products</a>
                    </li>
                    <li className="nav__menu--link">
                        <img src="/image/terrinova.png" alt="terrinova logo" className="logo" />
                    </li>
                    <li className="nav__menu--link">
                        <a href="#teams">Our Team</a>
                    </li>
                    <li className="nav__menu--link">
                        <a href="#faqs">FAQs</a>
                    </li>
                </ul>
            </div>
            {/* <div className="wrapper">
                <div className="banner">
                <div className="nav container">
                    <img src="/image/terrinova.png" alt="terriniva logo" className="nav__logo" />

                    <ul className="nav__menu">
                        <li className="nav__menu--link">
                            <a href="#story">Our Story</a>
                        </li>
                        <li className="nav__menu--link">
                            <a href="#products">Our Products</a>
                        </li>
                        <li className="nav__menu--link">
                            <img src="/image/terrinova.png" alt="terrinova logo" className="logo" />
                        </li>
                        <li className="nav__menu--link">
                            <a href="#teams">Our Team</a>
                        </li>
                        <li className="nav__menu--link">
                            <a href="#faqs">FAQs</a>
                        </li>
                    </ul>
                </div>
                </div>
              </div> */}
        </>
    );
}
export default NavigationBar;