function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR  SANSAAR</span>
              </li>
              <li>
               <p> Big range of vehicles for all your driving needs. We
                have the perfect car for your needs.
                </p>
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                one@rentacar.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carsansaar@gmail.com
                </a>
              </li>

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin/in/hristijanmicevski/"
                >
                  Created by Hristijan ©
                </a>
              </li> */}
            </ul>

            {/* <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Locations</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">About us</a>
              </li>
            </ul> */}

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sat : 9:00AM - 9:00PM</li>
              <li>Sun : Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
