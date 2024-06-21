import { IonIcon } from "react-ion-icon";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer_wrapper">
          <div className="footer_col">
            <div>
              <h3>FOLLOW US</h3>
              <hr />
            </div>
            <div>
              <div className="footer_links">
                <IonIcon name="logo-instagram" />
                &nbsp; Instagram
              </div>
              <div className="footer_links">
                <IonIcon name="logo-linkedin" />
                &nbsp;&nbsp;&nbsp;Linkedin
              </div>
              <div className="footer_links">
                <IonIcon name="logo-snapchat" />
                &nbsp;&nbsp;SnapChat
              </div>
              <div className="footer_links">
                <IonIcon name="logo-youtube" />
                &nbsp;&nbsp;&nbsp;Youtube
              </div>

              {/* <ul>
                <li className="footer_links">
                  <a>
                    <IonIcon name="logo-instagram" />
                    &nbsp; Instagram
                  </a>
                </li>
                <li className="footer_links">
                  <a>
                    <IonIcon name="logo-linkedin" />
                    &nbsp;&nbsp;&nbsp;Linkedin
                  </a>
                </li>
                <li className="footer_links">
                  <a>
                    <IonIcon name="logo-snapchat" />
                    &nbsp;&nbsp;SnapChat
                  </a>
                </li>
                <li className="footer_links">
                  <a>
                    <IonIcon name="logo-youtube" />
                    &nbsp;&nbsp;&nbsp;Youtube
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="footer_col">
            <div className="footer_heading">
              <h3>COMMUNITY</h3>
              <hr />
            </div>

            <div className="footer_links">
              Blog
            </div>
            <div className="footer_links">
              Webinars
            </div>
            <div className="footer_links">
              Events
            </div>
            <div className="footer_links">
              Contribute
            </div>

            
          </div>
          <div className="footer_col">
            <div>
              <h3>PRODUCT CATEGORIES</h3>
              <hr />
            </div>
            
              <div className="footer_links">
                <a href="#">Technology</a>
              </div>
              <div className="footer_links">
                <a href="#">Health</a>
              </div>
              <div className="footer_links">
                <a href="#">Nature</a>
              </div>
              <div className="footer_links">
                <a href="#">Home Decor</a>
              </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
