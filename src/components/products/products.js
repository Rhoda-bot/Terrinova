const Products = () =>{
    return(
        <>
        <div className="products py-5" id="products">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-3 text-start">
                        <h5 className="products--title pb-2">OUR PRODUCTS</h5>
                            <div className="products--subtitle">
                            Our current product line include
                            </div>
                            <p className="products--text pt-1">
                            Biofortified cassava and maize flours and grains. 
                        </p>
                    </div>
                    <div className="col-md-1"></div>
                   <div className="col-md-8 justify-content-end">
                        <div className="row">
                        <div className="col-md-4 text-center justify-content-center p-2">
                        <div className="card border-0 mx-auto h-100 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/maize.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Maize Flour</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center justify-content-center p-2">
                        <div className="card border-0 h-100 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/cassava.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Cassava Flour</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center p-2">
                        <div className="card border-0 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/grains.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Bio-fortified grains</span>
                            </div>
                        </div>
                    </div>
                        </div>
                   </div>
                   <div c></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Products;