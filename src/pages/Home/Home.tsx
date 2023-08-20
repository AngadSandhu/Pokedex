import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import ParallaxScroller from "../../components/ParallaxScroller/ParallexScroller";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <ParallaxScroller />

        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2">Your Personal Pokemon Reference</h2>
          <br />
          <hr />
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3 className="fs-2 text-body-emphasis">Catch `em all !</h3>
              <p>
                One stop place for your pokemon reference. Your personal pokedex
              </p>
            </div>
            <div className="feature col">
              <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <FontAwesomeIcon icon={faFilePowerpoint} />
              </div>
              <h3 className="fs-2 text-body-emphasis">Powered By PokeAPI</h3>
              <p>
                The PokeApi V2 provides all the detailed reference and stats for
                all the pokemon that have ever existed. Thanks to the poke api
                that we have all the knowledge at our fingertips.
              </p>
            </div>
            <div className="feature col">
              <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <FontAwesomeIcon icon={faJetFighter} />
              </div>
              <h3 className="fs-2 text-body-emphasis">
                Blazing fast and responsive
              </h3>
              <p>
                Built with modern UI Tech Stack keeping responsive design
                principles in mind that provides a fast and seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
