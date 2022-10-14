const Opportunities = () => {
    return (
        <>
        <div className="opportune py-5">
            <div className="container py-5">
                <div className="row text-start">
                    <div className="col-md-6">
                        <div className="opportune--title">
                        The Opportunities <br/> We See
                        </div>
                        <li className="opportune--text">
                          <p>
                            The demand for packaged maize flour 
                            in Niger Republic is on an all time high, 
                            especially as its major supplier (Libya) 
                            is still unable to resume supply due to
                             its political instability.
                          </p>
                        
                        </li>
                        <li  className="opportune--text">
                            <p>
                                With the skyrocketing prices
                                 of wheat flour in Benin Republic,
                                about 70% of flour used for baking
                                purposes is cassava based.
                            </p>
                         </li>
                         <li  className="opportune--text">
                          <p>
                            Urban dwellers within Niger and Benin Republic 
                            are heavily inclined to buy neatly packaged maize 
                            and cassava flours as opposed to the locally
                             processed ones with low quality and hygiene standards.
                          </p>
                        </li>
                    </div>
                    <div className="col-md-6 h-100">
                        <img src="/image/corn.png" alt="bnnnn" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Opportunities;