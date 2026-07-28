import {
  FiMail,
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
      <div className="contact-form-card">
        <span>SEND US A MESSAGE</span>

        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Company / Studio" />

          <select>
            <option>Project Type</option>
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

      <div className="contact-info-card">

        <span>GET IN TOUCH</span>

        <p>
          Reach out through any of the following channels.
        </p>

        {/* Email */}
        <div className="info-item">
          <FiMail />
          <div>
            <h4>Email</h4>
            <span>hello@etra-studio.com</span>
          </div>
        </div>

        {/* Phone */}
        <div className="info-item">
          <FiPhone />
          <div>
            <h4>Phone</h4>
            <span>+91 XXXXX XXXXX</span>
          </div>
        </div>

        {/* Location */}
        <div className="info-item">
          <FiMapPin />
          <div>
            <h4>Location</h4>
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Working Hours */}
        <div className="info-item">
          <FiClock />
          <div>
            <h4>Working Hours</h4>
            <span>Mon - Fri : 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="social-links">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaDiscord /></a>
          <a href="#"><FaXTwitter /></a>
        </div>

      </div>
    </section>
  );
}