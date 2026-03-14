import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import ParallaxScroller from "../../components/ParallaxScroller/ParallexScroller";
import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <div className={homeStyles.page}>
      <ParallaxScroller />

      <div className={homeStyles.inner}>
        <section className={homeStyles.section}>
          <h2 className={homeStyles.sectionTitle}>
            Your personal Pokémon reference
          </h2>
          <hr className={homeStyles.divider} aria-hidden />
          <div className="row g-4 row-cols-1 row-cols-lg-3">
            <div className="col">
              <div className={homeStyles.card}>
                <div className={homeStyles.cardIcon}>
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <h3 className={homeStyles.cardTitle}>Catch &apos;em all</h3>
                <p className={homeStyles.cardBody}>
                  One-stop place for your Pokémon reference. Your personal
                  Pokédex.
                </p>
              </div>
            </div>
            <div className="col">
              <div className={homeStyles.card}>
                <div className={homeStyles.cardIcon}>
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <h3 className={homeStyles.cardTitle}>Powered by PokeAPI</h3>
                <p className={homeStyles.cardBody}>
                  PokeAPI provides detailed reference and stats for every
                  Pokémon. All the knowledge at your fingertips.
                </p>
              </div>
            </div>
            <div className="col">
              <div className={homeStyles.card}>
                <div className={homeStyles.cardIcon}>
                  <FontAwesomeIcon icon={faJetFighter} />
                </div>
                <h3 className={homeStyles.cardTitle}>Fast and responsive</h3>
                <p className={homeStyles.cardBody}>
                  Built with a modern UI stack and responsive design for a fast,
                  seamless experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
