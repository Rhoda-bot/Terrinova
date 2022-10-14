const Success = () => {
    return(
        <>
        <div className="sucess py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5 p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <img src="/image/pan-boy.png" className="img-fluid px-3 mx-3 mt-2" alt=""/>
                                </div>
                                    <div className="row">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-7 p-3 px-3">
                                        <img src="/image/farmer.png" className="img-fluid p-2 text-end" alt=""/>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                   <div className="col-md-9">
                                   <img src="/image/hedge.png" className="img-fluid px-2" alt=""/>
                                   </div>
                                </div>
                                    <div className="row">
                                        <img src="/image/dad-child.png" className="img-fluid px-3 mt-3 mx-3" alt=""/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start py-5 m-3 px-3">
                    <div className="success--title">
                    What good would it make in the world if we succeed?
                    </div>
                    <span  className="success--text ">
                    Our success would directly impact the following Sustainable Development Goals (SDGs):are.
                    </span>
                    <p className="pt-2">
                    <li>Zero Hunger.</li>
                    <li> Good Health and Well-being.</li>
                    <li>Decent Work and Economic Growth.</li>
                    <li>Industry, Innovation and Infrastructu</li>
                    </p>
                    <button className="header--btn mt-5">Partner with Us</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Success;