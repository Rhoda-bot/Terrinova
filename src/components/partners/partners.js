const Partners = () =>{
    return(
        <>
        <div className="partners py-5">
            <div className="container py-5">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="partners--title pb-4">Our Principal Partners</div>
                        <div className="col-md-3 ">
                            <img src="/image/afrilab.png" className="img-fluid  px-4" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src="/image/eLab_.png" className="img-fluid px-4" alt=""/>
                        </div>  
                </div>
                <div className="row mx-auto justify-content-center mt-3 pt-4">
                <button className="header--btn">Partner with Us</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Partners;