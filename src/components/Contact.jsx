function Contact() {
  return (
    <section id="contact" className="fade-in">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Contact Me</h2>

          <p className="contact-intro">
            Feel free to reach out! Whether it's for collaboration, opportunities, 
            or just to connect — I’d love to hear from you.
          </p>

          <p className="contact-info">
            📧 prinstar.darko@gmail.com
          </p>

          <div className="socials">
            <a href="https://www.linkedin.com/in/ohenewaa-ampem-darko-b84a65229/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Prinstar" target="_blank">GitHub</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <div className="contact-buttons">
            <button type="submit">Send Message</button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;