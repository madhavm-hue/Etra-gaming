import {
  FiPhone,
  FiMapPin,
  FiClock,
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
    <section className="contact-main" id="contact-form">

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


          <select defaultValue="">
            <option value="" disabled>
              Project Type
            </option>

            <option>Game Development</option>
            <option>3D Animation</option>
            <option>Cinematics</option>
            <option>Environment Art</option>
          </select>


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
              No. 51, Dr. Ramasamy Salai,
              <br />
              K.K. Nagar, Chennai – 600078
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