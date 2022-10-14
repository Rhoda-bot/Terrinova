const Products = () =>{
    return(
        <>
        <div className="products py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 text-start">
                        <h5 className="products--title pb-2">OUR PRODUCTS</h5>
                            <div className="products--subtitle">
                            Our current product line include
                            </div>
                            <p className="products--text pt-1">
                            Biofortified cassava and maize flours and grains. 
                        </p>
                    </div>
                    <div className="col-md-3 text-center justify-content-center">
                        <div className="card border-0 mx-auto h-100 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/flour1.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Maize Flour</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center justify-content-center">
                        <div className="card border-0 h-100 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/flour2.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Cassava Flour</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-center justify-content-center">
                        <div className="card border-0 products__card">
                            <div className="card-img-top ">
                                <div className="products__card--circle p-3 m-3">
                                <img src="/image/Vector.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body">
                                <span className="products__card--text">Bio-fortified grains</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Products;