import Title from "../../../components/title";
import "./contact.css";
import ContactForm from "./contactform";

export default function Contact() {
  return (
    <div className="contact-wrapper container-fluid" id="contact">
      <Title title={"Contact Us"} />
      <div className="contact">
        <div className="contact-details">
          <div className="contact-item">
            <i>
              <img src="./phone.png" alt="" />
            </i>
            <div>Coming Soon!</div>
          </div>
          <div className="contact-item">
            <i>
              <img src="./email.png" alt="" />
            </i>
            <div>contactus@samparkbindhu.in</div>
          </div>
          <div className="contact-item">
            <i>
              <img src="./location.png" alt="" />
            </i>
            <div>
              SamparkBindhu Solutions Private Limited C/o Somara - Co-works 619,
              1st floor, 15th Cross Rd, JP Nagar 6th Phase, Bengaluru, Karnataka
              560078
            </div>
          </div>
        </div>
        <div className="contact-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
