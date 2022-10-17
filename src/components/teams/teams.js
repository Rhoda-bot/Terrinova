const Teams = () =>{
    return(
        <>
        <div className="teams py-5" id="teams">
            <div className="container py-5">
                <h3 className="teams--title pb-5">Our Team</h3>
                <div className="row align-items-end">

                <div className="col-md-6 p-2">
                    <div className="card text-start border-0 teams__card ">
                        <div className="row align-items-center">
                        <div class="col-sm-6 col-lg-4">
                            <img src="/image/abdoul.png" className="img-fluid teams--img " alt="..."/>
                         </div>
                         <div class="col-sm-6 col-lg-8">
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
                    <div className="col-md-6 p-2">
                    <div className="card text-start border-0 teams__card ">
                        <div className="row align-items-center">
                        <div class="col-sm-6 col-lg-4">
                            <img src="/image/espérance.png" className="img-fluid teams--img " alt="..."/>
                         </div>
                         <div class="col-sm-6 col-lg-8">
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