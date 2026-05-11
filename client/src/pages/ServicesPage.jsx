import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {

  const services = [
    {
      title: "Sports Event Management",
      image:
        "https://images.unsplash.com/photo-1569863959165-56dae551d4fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
      text:
        "End-to-end execution of tournaments, leagues, and premium sports experiences."
    },

    {
      title: "Athlete Branding",
      image:
        "https://images.unsplash.com/photo-1773136355391-930bb6c7478d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXRobGV0ZSUyMGJyYW5kaW5nfGVufDB8fDB8fHww",
      text:
        "Building powerful athlete identities through digital presence and partnerships."
    },

    {
      title: "Corporate Activations",
      image:
        "https://plus.unsplash.com/premium_photo-1739754131434-73ab0262c575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29ycG9yYXRlJTIwYWN0aXZhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      text:
        "Luxury experiential campaigns and brand activations for modern audiences."
    }

  ];

  return (
    <>
      <Navbar />

      <section className="services-hero">

        <div className="container">

          <p className="badge">
            Premium Services
          </p>

          <h1>
            Solutions Designed
            For Impact
          </h1>

        </div>

      </section>

      <section className="section">

        <div className="container services-grid">

          {services.map((service, index) => (

            <div
              className="service-box glass"
              key={index}
            >

              <img
                src={service.image}
              />

              <div className="service-content">

                <h2>{service.title}</h2>

                <p>{service.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );

}