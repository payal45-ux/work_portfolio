import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.whatsapp.com/8929247447/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                WhatsApp — Jatin Sharma
              </a>
            </p>
            <h4></h4>
              <p>
              <a
                href="mailto:djjatinvlogs0002@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Gmail — you can email me at djjatinvlogs0002@gmailcom just by clicking here!
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.instagram.com/dj_jatin_2002/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/8929247447"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="mailto:djjatinvlogs0002@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Gmail <MdArrowOutward />
            </a>
  
          </div>
          <div className="contact-box">
            <h2>
              WITH LOTS OF LOVE AND RHYTHEM<br />~<span>Jatin Sharma and Team❤️</span>
            </h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
