const About = () => {
  return (
    <div className="container-fluid">
      <div className="px-4 py-5 my-5 text-center">
        <p>Created By:</p>
        {/* <img className="d-block mx-auto mb-4" src="" alt="" width="72" height="57"> */}
        <h1 className="display-5 fw-bold">Angad Sandhu</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Developer | Learner | Enthusiast</p>
          <p>
            "I am a passionate software developer with the flair of creating
            some neat and cool user interfaces. I have about 7 years of rich
            experience across various domains in the software development
            industry like Banking, Entertainment, Purchase to Pay etc. I have
            partened with some amazing organisations like AT&T, Accenture and
            Basware and have collabaorated with them to deliver some top notch
            products."
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Know More About Me Here
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              My Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
