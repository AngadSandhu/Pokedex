import React from "react";
import aboutStyles from "./About.module.css";

const About = () => {
  return (
    <div className={aboutStyles.page}>
      <div className={aboutStyles.inner}>
        <section className={aboutStyles.section}>
          <div className={aboutStyles.headingBlock}>
            <span className={aboutStyles.headingLabel}>Created by</span>
            <h1 className={aboutStyles.headingName}>Angad Sandhu</h1>
            <p className={aboutStyles.headingTagline}>
              Developer · Learner · Enthusiast
            </p>
          </div>

          <div className={aboutStyles.card}>
            <p className={aboutStyles.cardBody}>
              I am a passionate software developer with a flair for creating
              neat, user-friendly interfaces. With about 9+ years of experience
              across domains such as Banking, Entertainment, Healthcare and Purchase to Pay,
              I have previously partnered with organisations like AT&T, Accenture and
              Basware to deliver top-notch products.
            </p>
            <div className={aboutStyles.btnWrap}>
              <a
                href="https://www.linkedin.com/in/angadsandhu16"
                className={aboutStyles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Know more about me
              </a>
              {/* <a
                href="#"
                className={aboutStyles.btnSecondary}
                onClick={(e) => e.preventDefault()}
              >
                My portfolio
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
