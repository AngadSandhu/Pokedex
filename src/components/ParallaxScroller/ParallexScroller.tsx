import parallaxStyles from "./ParallaxScroller.module.css";

const ParallaxScroller = () => {
  return (
    <div className={parallaxStyles.parallaxContainer}>
      <div className={parallaxStyles.parallaxHeader}>
        <h1>Pokemon</h1>
        <p>Gotta Catch `em all</p>
      </div>
    </div>
  );
};

export default ParallaxScroller;
