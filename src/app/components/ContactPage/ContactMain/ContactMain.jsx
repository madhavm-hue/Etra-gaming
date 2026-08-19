import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiMail,
} from "react-icons/fi";

import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

import "./contactMain.css";

export default function ContactMain() {
  return (
    <section className="contact-main">

      {/* LEFT - CONTACT FORM */}
      <div className="contact-form-card">

        <span>SEND US A MESSAGE</span>

        <form>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />
          </div>

          <input
            type="text"
            placeholder="Company / Studio"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project"
          />

          <button type="submit">
            SEND MESSAGE
          </button>

          <p>
            We respect your privacy. Your information will never be shared.
          </p>

        </form>
      </div>

      {/* RIGHT - CONTACT INFORMATION */}
      <div className="contact-info-card">

        <span>GET IN TOUCH</span>

        <p>
          Reach out to us for project enquiries, collaborations and
          creative partnerships.
        </p>

        {/* EMAIL */}
        <div className="info-item">
          <FiMail />

          <div>
            <h4>Email</h4>

            <div>
              <strong>Gaming</strong>
              <br />
              <a href="mailto:etragameprod@etradreams.com">
                etragameprod@etradreams.com
              </a>
            </div>

            <div>
              <strong>Animation</strong>
              <br />
              <a href="mailto:etraanim@etradreams.com">
                etraanim@etradreams.com
              </a>
            </div>
          </div>
        </div>

        {/* PHONE */}
        <div className="info-item">
          <FiPhone />

          <div>
            <h4>Phone</h4>

            <a href="tel:+919500622644">
              +91 95006 22644
            </a>
          </div>
        </div>

        {/* LOCATION */}
        <div className="info-item">
          <FiMapPin />

          <div>
            <h4>Location</h4>

            <span>
              Etra Automotive Engineering and Technologies Private Limited
              <br />
              1/400A North Street, Othaiyal
              <br />
              O. Mettuppatti Post
              <br />
              Sattur, Tamil Nadu - 626203, India
            </span>
          </div>
        </div>

        {/* WORKING HOURS */}
        <div className="info-item">
          <FiClock />

          <div>
            <h4>Working Hours</h4>

            <span>
              Mon - Fri : 9:00 AM - 6:00 PM
            </span>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

          <a href="#" aria-label="Discord">
            <FaDiscord />
          </a>

          <a href="#" aria-label="X">
            <FaXTwitter />
          </a>
        </div>

      </div>

    </section>
  );
}