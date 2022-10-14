const Success = () => {
    return(
        <>
        <div className="sucess py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src="/image/sdg.png" alt="" className="img-fluid"/> 
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 text-start py-5 px-3">
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