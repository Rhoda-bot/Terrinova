const Story = () => {
    return (
        <>
            <div className="story py-5" id="story">
                <div className="container py-5">
                    <div className="row text-start align-items-center">
                        <h3 className="story--title pb-3">OUR STORY</h3>
                        <div className="col-md-5">
                            <p className="story--text">
                            As founders who have spent a large part of our life in Academia,
                             we got frustrated from seeing viable solutions with great market 
                             potential die within the lab without ever reaching the end users who 
                             desperately needed them. Terrinova is a response to this frustration.
                            </p>
                            <p className="story--text">
                            We seek to to solve problems in the production and consumption 
                            end of the value chain by incentivising farmers to plant 
                            bio-fortified grains with improved yield, and make quality ready 
                            to use flours and grains available to industries and consumers 
                            in Niger and Benin Republic respectively. 
                            </p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="row justify-content-evenly">
                                <div className="col-md-5 m-2">
                                    <div className="card border-0">
                                        <img src="/image/ab.jpg" alt="images" className="col-sm-none img-fluid story__img mx-3 rounded"  />
                                    </div>
                                </div>
                                <div className="col-md-5 card border-0 m-2">
                                    <img src="/image/esp.jpg" alt="images" className=" col-sm-none img-fluid story__img2 mx-3 rounded"  />
                                </div>
                            </div>
                             <p className="text-center story--subtitle">Abdoul &  Espérance</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Story;