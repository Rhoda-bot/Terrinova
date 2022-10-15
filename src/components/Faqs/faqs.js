const Faqs = () => {
    return(
        <>
        <div className="faqs py-5" id="faqs">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="faqs--title pb-5">Frequently Asked Questions</div>
                    <div className="col-md-10 p-3">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div className="p-3 text-start">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>What is Terrinova?</b>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">TERRINOVA GROUP is a modern mill line Agro-Processing company that produces and packages high-quality, ready-for-consumption biofortified cassava and maize flours.</div>
                          </div>
                        </div>
                      </div>
      <div className="p-3 text-start">
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <b>What do we offer</b>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We produce nutritionally improved Maize and Cassava flour that's ready for consumption. We also supply bio-fortified grains to farmers and industries like breweries.</div>
    </div>
  </div>
      </div>
      <div className="p-3">
      <div class="accordion-item text-start">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <b>Who are the founders?</b>
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Abdoul Raouf Sayadi Maazou and Espérance Déo Gratias are the co-founders of The Terrinova Group. They are both PAULESI Research fellows, exploring plant breeding at the International Institute of Tropical Agriculture (IITA).
          </div>
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
export default Faqs;