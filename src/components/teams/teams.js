const Teams = () =>{
    return(
        <>
        <div className="teams py-5" id="teams">
            <div className="container py-5">
                <h3 className="teams--title pb-5">Our Team</h3>
                    <div className="row text-start ">
                        <div className="col-md-6  " style={{
                            maxwidth: '540px'
                        }}>
                         <div class="card teams__card border-0 mb-3">
                            <div class="row g-0 align-items-center">
                                <div class="col-lg-4 col-sm-6">
                                <img src="/image/abdoul.png" class="teams__card--img img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-lg-8 col-sm-6">
                                <div class="card-body">
                                <h5 class="card-title teams__card--title">Abdoul Raouf</h5>
                                <h5 class="card-subtitle teams__card--subtitle">Sayadi Maazou</h5>
                                <p class="card-text teams__card--text pt-3">
                                    Ph.D. Plant Breeding, 
                                    PAULESI Research fellow, IITA. 
                                    Cassava biofortification for 
                                    provitamin A (Research direction).

                                </p> 
                                <p class="card-text teams__card--span"><small class="text-muted teams__card--span">Co-founder.</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-2" style={{
                            maxwidth: '540px'
                        }}>
                         <div class="card teams__card border-0  mb-3">
                            <div class="row g-0 align-items-center">
                                <div class="col-lg-4 col-sm-6">
                                <img src="/image/espérance.png" className="teams__card--img  img-fluid rounded-start rounded-lg-none" alt="..."/>
                                </div>
                                <div class="col-lg-8 col-sm-6">
                                <div class="card-body">
                                <h5 class="card-title teams__card--title">Espérance</h5>
                                <h5 class="card-subtitle teams__card--subtitle">Déo Gratias</h5>
                                <p class="card-text teams__card--text pt-3">
                                    Ph.D. Plant Breeding, 
                                    PAULESI Research fellow, IITA. 
                                    Cassava biofortification for 
                                    provitamin A (Research direction).

                                </p> 
                                <p class="card-text teams__card--span"><small class="text-muted teams__card--span">Co-founder.</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Teams;