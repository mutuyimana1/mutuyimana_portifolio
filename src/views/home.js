import React from "react";
// import HomeLayout from "../components/homelayout";
const Home = () => {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="51">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="img/prof.jpg" alt="Image" />
          </div>
          <div className="sidebar-content">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">
                Navigation
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#header">
                      Home<i className="fa fa-home"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About<i className="fa fa-address-card"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience<i className="fa fa-star"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">
                      Service<i className="fa fa-tasks"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact<i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="sidebar-footer">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/Alice-Mutuyimana ">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="header" id="header">
            <div className="content-inner">
              <p>I'm</p>
              <h1>Alice Mutuyimana</h1>
              <h2>a Full stack Developer, UI/UX Designer</h2>
              <span className="typed-cursor">|</span>
              <div className="typed-text">
                Web Developer,UI/UX Design, Front End Developer, Apps Developer,
                Graphic Designer
              </div>
            </div>
          </div>
          <div className="large-btn">
            <div className="content-inner">
              <a className="btn" href="./files/Mutuyimana.pdf" download>
                {" "}
                <i className="fa fa-download"></i>Resume
              </a>
              <a className="btn" href="mailto:amutuyimana64@gmail.com">
                <i className="fa fa-hands-helping"></i>Hire Me
              </a>
            </div>
          </div>
          <div className="about" id="about">
            <div className="content-inner">
              <div className="content-header">
                <h2>About Me</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col-lg-5">
                  <img src="img/prof.jpg" alt="Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <p>
                    I am a dedicated passionate software developer willing to
                    face the current challenges and ready to learn new skills. I
                    have a bachelor degree in Information Technology (IT) and am
                    extremely knowledgeable with experience in web application
                    development. I am a strongly reliable person and highly
                    flexible means I can work with anyone in any community and
                    also, I am a faster leaner..
                  </p>
                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/mutuyimana-alice-7b7224187/"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="education" id="education">
            <div className="content-inner">
              <div className="content-header">
                <h2>Education</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      december-2018<i>to</i> February-2023
                    </span>
                    <h3>Bachelor Degree</h3>
                    <p>
                      I am a graduate form University of Rwanda College of
                      Science and Technology (CST) in Information Technology
                      (IT)
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      december-2021 <i>to</i> february-2022
                    </span>
                    <h3>Advanced web development</h3>
                    <p>
                      I have completed she can code program cohort 5 doing Html,
                      Css, React js and Node js. and I worked on class projects
                      to enhance experience and professional skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service" id="service">
            <div className="content-inner">
              <div className="content-header">
                <h2>Service</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-desktop"></i>
                    <h3>Web Design</h3>
                    <p>Desing a a mockup for website</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-laptop"></i>
                    <h3>Web Development</h3>
                    <p>
                      development of website with higher user experience and I
                      focused on thier functionalities and capabilities.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-search"></i>
                    <h3>UI/UX Design</h3>
                    <p>
                      I do create UI/UX Design designing for mobile,,web and
                      desktop.
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-envelope-open-text"></i>
                    <h3>UX Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="portfolio" id="portfolio">
            <div className="content-inner">
              <div className="content-header">
                <h2>Portfolio</h2>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".web-des">Design</li>
                    <li data-filter=".web-dev">Development</li>
                  </ul>
                </div>
              </div>
              <div
                className="row portfolio-container"
                style={{ position: "relative", height: "500px" }}
              >
                <div
                  className="col-lg-4 col-md-6 portfolio-item web-des"
                  style={{ position: "absolute", left: " 0px", top: "0px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="img/portfolio-1.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-1.png"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        className="link-preview"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        New year wish <span>Design</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item web-des"
                  style={{ position: "absolute", left: "208px", top: "0px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="img/portfolio-2.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-2.png"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        Certificate<span>You did well</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item web-dev"
                  style={{ position: "absolute", left: "417px", top: "0px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="img/portfolio-3.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-3.png"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        Marry chrismass <span>W wish you marry chrismass</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item web-dev"
                  style={{ position: "absolute", left: "0px", top: "250px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="img/portfolio-4.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-4.png"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        missa<span>Lord is good all the time</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item dig-mar"
                  style={{ position: "absolute", left: "208px", top: "250px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img src="img/welcome.png" className="img-fluid" alt="" />
                      <a
                        href="img/welcome.png"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        Welcome <span>welcome to new students</span>
                      </a>
                    </figure>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 portfolio-item dig-mar"
                  style={{ position: "absolute", left: "417px", top: "250px" }}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="img/portfolio-6.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-6.png"
                        className="link-preview"
                        data-lightbox="portfolio"
                        data-title="Project Name"
                        title="Preview"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a href="#" className="link-details" title="More Details">
                        <i className="fa fa-link"></i>
                      </a>
                      <a className="portfolio-title" href="#">
                        missa <span>batisimu ya nyagasani</span>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://www.figma.com/files/recent?fuid=1093590336444973863">
              <button>figma link1</button>
            </a>
            <a href="https://www.figma.com/files/recent?fuid=993899557701917887">
              <button>figma link2</button>
            </a>
          </div> */}
          <div class="experience" id="experience">
            <div class="content-inner">
              <div class="content-header">
                <h2>Experience</h2>
              </div>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="exp-col">
                    <span>
                      01-Jan-2020 <i>to</i> 31-Dec-2023
                    </span>
                    <h3>Communote Catholic st Paul</h3>
                    <h4>Design</h4>

                    <p>
                      I am designing flyers for prepation missa and celemony
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="exp-col">
                    <span>
                      01-dec-2021 <i>to</i> 01-feb-2022
                    </span>
                    <h3>she can code</h3>
                    <h4>Full stack developer</h4>

                    <p>I was designing frontend and backend</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="exp-col">
                    <span>
                      23-feb-2020 <i>to</i>May-2023
                    </span>
                    <h3>SolvIT</h3>
                    <h4>frontend</h4>
                    <h5>Full-time</h5>
                    <p>I developed a frontend using React js</p>
                  </div>
                </div>
                {/* <!-- <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Agency</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Graphic Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div> --> */}
              </div>
            </div>
          </div>

          <div className="contact" id="contact">
            <div className="content-inner">
              <div className="content-header">
                <h2>Contact</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="contact-info">
                    <p>
                      <i className="fa fa-user"></i>Alice Mutuyimana
                    </p>
                    <p>
                      <i className="fa fa-tag"></i>Full stack developer
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>
                      <a href="amutuyimana64.com">amutuyimana65@gmail.com</a>
                    </p>
                    <p>
                      <i className="fa fa-phone"></i>
                      <a href="tel:+250782099213">+250782099213</a>
                    </p>
                    <p>
                      <i className="fa fa-map-marker"></i>Kigali-Kacyiru
                    </p>
                    <div className="social">
                      <a className="btn" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn"
                        href="https://www.linkedin.com/in/mutuyimana-alice-7b7224187"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="btn" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form">
                    <form>
                      <b>currently sending message not work</b>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div>
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="content-inner">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <p>
                    © Copyright <a href="https://htmlcodex.com">Mutuyimana</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
