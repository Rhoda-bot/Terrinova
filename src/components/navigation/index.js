const NavigationBar = () => {
    return(
        <>
              <div className="wrapper">
                <div className="banner">
                <div className="nav container">
                    <img src="/image/terrinova.png" alt="terriniva logo" className="nav__logo" />

                    <ul className="nav__menu">
                        <li className="nav__menu--link">Our Story</li>
                        <li className="nav__menu--link">Our Products</li>
                        <li className="nav__menu--link">
                            <img src="/image/terrinova.png" alt="terrinova logo" className="logo" />
                        </li>
                        <li className="nav__menu--link">Our Team</li>
                        <li className="nav__menu--link">FAQs</li>
                    </ul>
                </div>
                </div>
              </div>
        </>
    );
}
export default NavigationBar;