import "./Services.css";

const Services = () => {
  return (
    <>
      <h1 className="title">Services</h1>
      <div id="grid">
        <div className="intro">
          <h2 className="motto">
            Your tech <u>dreams</u>, brought <u>to life</u>.
          </h2>
        </div>
        <div className="services-grid">
          <div className="col">
            <h2 className="col-title">Discover</h2>
            <p>Research</p>
            <p>Strategy</p>
            <p>Ideation</p>
          </div>
          <div className="col">
            <h2 className="col-title">Design</h2>
            <p>Branding</p>
            <p>UX</p>
            <p>Visual Design</p>
          </div>
          <div className="col">
            <h2 className="col-title">Develop</h2>
            <p>Industry Standard</p>
            <p>Modularization</p>
            <p>Maintainability</p>
          </div>
          <div className="col">
            <h2 className="col-title">Deploy</h2>
            <p>Prototyping</p>
            <p>Hosting</p>
          </div>
        </div>
        <div id="content">
          <p id="content-inner">
            We specialize in{" "}
            <strong>
              <u>Full-Stack Web Development</u>
            </strong>{" "}
            and{" "}
            <strong>
              <u>Blockchain Development</u>
            </strong>
            . As a team, we have experience building complex web applications,
            and developing{" "}
            <strong>
              <u>Smart Contracts</u>
            </strong>{" "}
            for a variety of Blockchain projects. We can offer a full{" "}
            <strong>
              <u>end-to-end</u>
            </strong>{" "}
            consulting experience, where we{" "}
            <strong>
              <u>design</u>
            </strong>
            ,{" "}
            <strong>
              <u>develop</u>
            </strong>
            , and{" "}
            <strong>
              <u>deploy</u>
            </strong>{" "}
            your website or web application.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
