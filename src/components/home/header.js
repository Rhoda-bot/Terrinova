import NavigationBar from '../navigation';


const Header = () => {
    return (
        <>
            {/* <div className="header">
                <div className="container">
                    <NavigationBar />
                    <div className="row header__row">
                        <h1 className="header--title">
                            Profitability & Philanthropy Do Not
                            <br/> Have To Be Parallel Lines.
                        </h1>
                        <p className="header--text mt-2">
                            Terrinova has figured out a way to create enterprise from solving one of <br/> Africa’s most pressing food problems. 
                        </p>
                        <a href='/image/sample.pdf' download="cta" target="_blank" className="header--link">Partner with Us</a>
                    </div>
                </div>
            </div> */}

            
            <div className="banner">
                <div className="container">
                    <NavigationBar />

                    <div className="banner__text">
                        <h1 className="banner__text--title">
                            Profitability & Philanthropy Do Not
                            <br/> Have To Be Parallel Lines.
                        </h1>
                        <p className="banner__text--sub">
                            Terrinova has figured out a way to create enterprise from solving one of <br/> Africa’s most pressing food problems. 
                        </p>
                     <div className='pt-5'>
                     <a href='/image/sample.pdf' download="cta" target="_blank" className="banner__text--btn">Partner with Us</a>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;