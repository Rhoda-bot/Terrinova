const Teams = () =>{
    return(
        <>
        <div className="teams py-5">
            <div className="container py-5">
                <div className="row">
                    <h3 className="teams--title">Our Team</h3>
                    <div className="col-md-6">
                    <div className="card mb-3 text-start border-0 teams__card ">
                        <div className="row g-0">
                        <div class="col-md-4 p-2">
                            <img src="/image/man.png" className="img-fluid teams--img rounded-start" alt="..."/>
                         </div>
                         <div class="col-md-8">
                            <div class="card-body p-3 m-3">
                                <h5 class="card-title teams__card--title">Abdoul Raouf</h5>
                                <h5 class="card-subtitle teams__card--subtitle">Sayadi Maazou</h5>
                                <p class="card-text teams__card--text pt-3">
                                Ph.D. Plant Breeding, 
                                PAULESI Research fellow, IITA.
                                Maize biofortification for 
                                provitamin A (Research direction).
                                </p>
                                <p class="card-text teams__card--span"><small class="text-muted teams__card--span">Co-founder.</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 card mb-3 text-start border-0 teams__card ">
                        <div className="row g-0">
                        <div class="col-md-4 p-2">
                            <img src="/image/woman.png" className="img-fluid teams--img rounded-start" alt="..."/>
                         </div>
                         <div class="col-md-8">
                         <div class="card-body p-3 m-3">
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
        </>
    )
}
export default Teams;