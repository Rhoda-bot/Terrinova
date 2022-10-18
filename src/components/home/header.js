import NavigationBar from '../navigation';


const Header = () => {
    return (
        <>
            <div className="header py-5 py-md-3">
                    <NavigationBar />
                <div className="container py-lg-5 py-md-3">
                    <div className="row header__row py-5 justify-content-center">
                        <h1 className="header--title">
                            Profitability & Philanthropy Do Not
                            <br/> Have To Be Parallel Lines.
                        </h1>
                            <p className="header--text">
                            Terrinova has figured out a way
                             to create enterprise from solving one of <br/> Africa’s most pressing food problems. 
                            </p>
                             <a href='/image/sample.pdf' download="cta" target="_blank" className="header--link">Partner with Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;