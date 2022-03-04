import "./Contact.css";
import { Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Contact = () => {
  return (
    <div>
      <div id="container">
        <div className="contactus">
          <h1 id="contact-title">Contact Us</h1>
          <p className="contact-copy">
            We would love to hear from you! Send us an email to book a
            consultation, or to ask us any questions 😊
          </p>
        </div>

        <div className="contactus-form">
          <form
            target="_blank"
            action="https://formsubmit.co/e1b339b9a8156e18552f3371af9f6826"
            method="POST">
            <div className="form-group">
              <div className="name-container">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="email-container">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="message">
              <textarea
                placeholder="Your Message"
                className="message-form"
                name="message"
                rows="10"
                required></textarea>
            </div>
            <Button
              variant="contained"
              type="submit"
              className="submit-button"
              endIcon={<SendRoundedIcon />}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
