const Solutions = () => {
    return (
        <>
        <div className="solution py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-4  text-lg-start">
                        <h4 className="solution--title pb-3 pb-lg-2"> OUR SOLUTION</h4>
                            <div className="solution--subtitle pb-5">
                            We Buy From Cooperatives, & Sell To Wholesalers & Industries
                            </div>
                                <button className="solution--btn">
                                    <a href='https://drive.google.com/file/d/1RmQeZb6VETZQPcU6bjapUEz5vmJMhTft/view?usp=drivesdk' target="_blank" rel="noreferrer">Join our Mission</a>
                                </button>
                    </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 p-2">
                                     <div className="card border-0 solution__card h-100 pb-2 px-3 mx-3 ">
                                        <div className="card-img-top ">
                                            <div className="p-3 m-3">
                                            <img src="/image/grains.png" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    <div className="card-body h-100">
                                        <div className="solution__card--title pb-2">
                                        Improved species of crops.
                                        </div>
                                        <p className="solution__card--text h-100">
                                        We help farmers reduce their cost of production 
                                        by developing crop varieties with high grain potential and
                                        directly offtaking from them at good prices.

                                        </p>
                                    </div>
                                </div>
                             </div>
                    <div className="col-md-6 p-2">
                        <div className="card border-0 solution__card h-100 pb-2 p-3 mx-3">
                            <div className="card-img-top ">
                                <div className=" p-3 m-3">
                                <img src="/image/maize.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body h-100">
                                <div className="solution__card--title pb-2">
                                Healthier finished foods.
                                </div>
                                <p className="solution__card--text h-100">
                                In response to the inappropriate processing and preservation 
                                of farm produce, we produce high quality cassava and maize flours,
                                 which will be processed and packaged in compliance with required
                                  hygiene standards using modern machines and relevant technology.</p>
                            </div>
                            </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Solutions;