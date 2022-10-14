const Story = () => {
    return (
        <>
            <div className="story py-5">
                <div className="container py-5">
                    <div className="row text-start">
                        <h3 className="story--title">Our Story</h3>
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 story__img card border-0 h-100">
                                    <div className="story__img--overlay">
                                    <img src="/image/story-man.png" alt="images" className="img-fluid" />

                                    </div>
                                </div>
                                <div className="col-md-6 story__img--two card border-0 h-100">
                                    <img src="/image/story-woman.png" alt="imagess" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Story;