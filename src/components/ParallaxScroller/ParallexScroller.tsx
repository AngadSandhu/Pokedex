import parallaxStyles from "./ParallaxScroller.module.css";

const ParallaxScroller = () => {
  return (
    <div className={parallaxStyles.parallaxContainer}>
      <div className={parallaxStyles.parallaxLayer} aria-hidden />
      <div className={parallaxStyles.parallaxOverlay}>
        <div className={parallaxStyles.parallaxHeader}>
          <h1>Pokémon</h1>
          <p>Gotta Catch &apos;em All</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroller;
