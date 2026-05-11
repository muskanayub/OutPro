import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="container">

          <p className="badge">
            About Outpro
          </p>

          <h1>
            Crafting Exceptional
            Sports Experiences
          </h1>

          <p className="about-subtext">
            Outpro India delivers luxury sports,
            athlete branding, and event execution
            experiences engineered with innovation.
          </p>

          <img
            src="https://plus.unsplash.com/premium_photo-1661483635418-f1a527d93aa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwZXZlbnRzfGVufDB8fDB8fHww"
            className="about-banner"
          />

        </div>

      </section>

      <section className="section">

        <div className="container about-grid">

          <div>
            <h2>Our Story</h2>

            <p>
              Outpro India was founded to redefine
              sports and event management through
              creativity, execution precision,
              and premium experiences.
            </p>
          </div>

          <div>
            <h2>Our Mission</h2>

            <p>
              We help athletes, brands,
              and organizations create
              unforgettable moments.
            </p>
          </div>

        </div>

      </section>

      <section className="section">

        <div className="container stats-grid">

          <div className="stat-card glass">
            <h2>50+</h2>
            <p>Events Managed</p>
          </div>

          <div className="stat-card glass">
            <h2>20+</h2>
            <p>Brand Collaborations</p>
          </div>

          <div className="stat-card glass">
            <h2>100+</h2>
            <p>Professional Staff</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );

}