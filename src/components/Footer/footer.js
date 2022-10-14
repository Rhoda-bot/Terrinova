const Footer = () =>{
    return(
        <>
        <div className="footer py-5">
            <div className="container py-5">
                <div className="row align-items-center mx-auto">
                    <h4 className="footer--title text-center">
                    TERRINOVA is proudly supported by 
                    </h4>
                    <div className="col-md-3">
                        <img src="/image/afrib.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src="/image/giz.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src="/image/pau.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src="/image/elab.png" className="img-fluid" alt="" />
                    </div>
                    <div className="row pt-lg-3 footer__bottom align-items-center justify-content-center">
                        <hr className="footer__bottom"/>
                        <p>
                        Parcelle H lot 265 Abomey-Calavi République du Bénin  ||  hello@terrinovagroup.com  ||  +22966074747 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;