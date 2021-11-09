import Title from "../../../components/Title";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <Title title={"Contact"} />
      <div className="contact">
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>Coming Soon!</div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>contactus@samparkbindhu.in</div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
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
