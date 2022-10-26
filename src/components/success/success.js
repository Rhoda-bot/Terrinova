const Success = () => {
    return(
        <>
        <div className="success py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src="/image/sdg.png" alt="" className="img-fluid success__img p-3"/> 
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 text-start py-5 px-3">
                    <div className="success--title pb-2">
                    What good would it make in the world if we succeed?
                    </div>
                    <span  className="success--text pb-4">
                    Our success would directly impact the following Sustainable Development Goals (SDGs):are.
                    </span>
                    <p className="pt-4">
                    <li>Zero Hunger.</li>
                    <li> Good Health and Well-being.</li>
                    <li>Decent Work and Economic Growth.</li>
                    <li>Industry, Innovation and Infrastructu</li>
                    </p>
                    <button className="partners--btn mt-4">
                        <a  href='https://drive.google.com/file/d/1RmQeZb6VETZQPcU6bjapUEz5vmJMhTft/view?usp=drivesdk' target="_blank" rel="noreferrer">Partner with Us</a>
                    </button>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Success;