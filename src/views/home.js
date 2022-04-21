import React from "react";
// import HomeLayout from "../components/homelayout";
const Home = () => {
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="51">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="img/profile.png" alt="Image" />
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
                    <a className="nav-link" href="#portfolio">
                      Portfolio<i className="fa fa-file-archive"></i>
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
            <a href="https://www.linkedin.com/in/mutuyimana-alice-7b7224187">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="header" id="header">
            <div className="content-inner">
              <p>I'm</p>
              <h1>Alice Mutuyimana</h1>
              <h2>a Full stack Developer</h2>
              <span className="typed-cursor">|</span>
              <div className="typed-text">
                Web Designer, Web Developer, Front End Developer, Apps
                Developer, Graphic Designer
              </div>
            </div>
          </div>
          <div className="large-btn">
            <div className="content-inner">
              <a className="btn" href="#">
                <i className="fa fa-download"></i>Resume
              </a>
              <a className="btn" href="#">
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
                  <img src="img/ather.png" alt="Image" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <p>
                  I am a dedicated passionate software developer willing to face the current challenges 
                  and ready to learn new skills. I have a bachelor degree in Information Technology (IT) 
                  and am extremely knowledgeable with experience in web application development. 
                  I am a strongly reliable person and highly flexible means I can work with anyone 
                  in any community and also, I am a faster leaner..
                  </p>
                  <a className="btn" href="amutuyimana64@gmail.com">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>Design</p>
                      <p>85%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <div className="skill-name">
                      <p>Html</p>
                      <p>95%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skills">
                    <div className="skill-name">
                      <p>Development</p>
                      <p>90%</p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
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
                      01-Jan-2015 <i>to</i> 31-Dec-2017
                    </span>
                    <h3>A'level Certificate</h3>
                    <p>
                      I completed A'level in Mathematics Computer Science and
                      Economics(MCE)
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-dec-2018<i>to</i> Present
                    </span>
                    <h3>Bachelor Degree</h3>
                    <p>
                      I am doing Information technology in UR Nyarugenge Campus
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="edu-col">
                    <span>
                      01-dec-2021 <i>to</i> 01-feb-2022
                    </span>
                    <h3>Advanced web development</h3>
                    <p>
                      I have completed she can code program cohort 5 doing Html,
                      Css, React js and Node js
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
                    <p>Desing a website</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-laptop"></i>
                    <h3>Web Development</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-search"></i>
                    <h3>UI Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="srv-col">
                    <i className="fa fa-envelope-open-text"></i>
                    <h3>UX Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit suscipit orci. Donec
                      molestie velit id libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio" id="portfolio">
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
                        Project Name <span>Web Design</span>
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
                        Project Name <span>Web Development</span>
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
                        Project Name <span>Web Development</span>
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
                      <img
                        src="img/portfolio-5.png"
                        className="img-fluid"
                        alt=""
                      />
                      <a
                        href="img/portfolio-5.png"
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
                        Project Name <span>Digital Marketing</span>
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
                        Project Name <span>Digital Marketing</span>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="experience" id="experience">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Experience</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2023</span>
                                    <h3>Communote Catholic st Paul</h3>
                                    <h4>Design</h4>
                                   
                                    <p>I am designing fliers for prepation missa and celemony</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-dec-2021 <i>to</i> 01-feb-2022</span>
                                    <h3>she can code</h3>
                                    <h4>Full stack developer</h4>
                                   
                                    <p>I was designing frontend and backend</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>23-feb-2020 <i>to</i>present</span>
                                    <h3>SolvIT</h3>
                                    <h4>frontend</h4>
                                    <h5>Internership</h5>
                                    <p>I am developing a frontend using React js</p>
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
          <div className="review" id="review">
            <div className="content-inner">
              <div className="content-header">
                <h2>Review</h2>
              </div>
              <div className="row align-items-center review-slider slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{}}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: "1",
                      width: " 4382px",
                      transform: "translate3d(-626px, 0px, 0px);",
                    }}
                  >
                    <div
                      className="col-md-12 slick-slide slick-cloned"
                      data-slick-index="-1"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: "626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          {/* <img src="img/review-3.jpg" alt="Image" /> */}
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="col-md-12 slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      tabindex="0"
                      style={{ width: " 626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-1.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="col-md-12 slick-slide"
                      data-slick-index="1"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: "626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-2.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="col-md-12 slick-slide"
                      data-slick-index="2"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: "626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-3.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="col-md-12 slick-slide slick-cloned"
                      data-slick-index="3"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: " 626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-1.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="col-md-12 slick-slide slick-cloned"
                      data-slick-index="4"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: "626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-2.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="col-md-12 slick-slide slick-cloned"
                      data-slick-index="5"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: " 626px" }}
                    >
                      <div className="review-slider-item">
                        <div className="review-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu suscipit orci. Donec molestie velit id
                            libero blandit, quis suscipit urna suscipit. Donec
                            aliquet erat eu lacinia iaculis. Ut tempor tellus eu
                            sem pharetra feugiat.
                          </p>
                        </div>
                        <div className="review-img">
                          <img src="img/review-3.jpg" alt="Image" />
                          <div className="review-name">
                            <h3>Client Name</h3>
                            <p>Profession</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{}}
                >
                  Next
                </button>
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
                      <a className="btn" href="https://www.linkedin.com/in/mutuyimana-alice-7b7224187">
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
                                <p>© Copyright <a href="https://htmlcodex.com">Mutuyimana</a></p>
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
