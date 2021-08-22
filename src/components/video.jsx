import '../assets/style.css'


function Video(){
return(

    <>

    <section id="mu-video">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-video-area">
                <h2>Glimpses</h2>
                <p className="mu-title-content">Let's Look back to at the precious momemts which we have spent together! </p>
                {/* Start Video content */}
                <div className="mu-video-content">		
                <iframe width="854" height="480" src="https://www.youtube.com/embed/85Pu_wT-LH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>						
                </div>
                {/* End Video content */}
              </div>
            </div>
          </div>
        </div>	
      </section>

    </>
)
}
export default Video