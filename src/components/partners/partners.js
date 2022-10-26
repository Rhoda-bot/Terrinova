const Partners = () =>{
    return(
        <>
        <div className="partners py-5">
            <div className="container py-5 text-center">
                <div className="partners--title pb-4 ">Our Principal Partners</div>
                    <div className="row  justify-content-evenly align-items-end">
                        <div className="col-md-6 col-sm-6 partners__col text-end p-2">
                            <img src="/image/afrilab.png" alt="" className="partners__col--img"/>
                        </div>
                        <div className="col-md-6 col-sm-6 partners__col text-start p-2">
                        <img src="/image/eLab_.png" alt="" className="partners__col--img"/>
                        </div>
                    </div>
                    <div className="row mx-auto justify-content-center mt-3 pt-4">
                        <button className="partners--btn">Partner with Us</button>
                    </div>
                </div>
         </div>
        </>
    )
}
export default Partners;