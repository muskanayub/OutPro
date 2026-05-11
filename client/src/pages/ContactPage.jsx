import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (data.success) {

        alert("Message Sent 🚀");

        setForm({
          name: "",
          email: "",
          message: ""
        });

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (
    <>
      <Navbar />

      <section className="contact-page">

        <div className="container contact-layout">

          {/* LEFT */}
          <div className="contact-left">

            <p className="badge">
              📩 Contact Us
            </p>

            <h1>
              Let’s Build
              Something Great
            </h1>

            <p>
              Reach out for events,
              collaborations, athlete branding,
              or partnerships.
            </p>

            <img
              src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
              className="contact-image"
            />

          </div>

          {/* RIGHT */}
          <form
            className="contact-form glass"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button className="btn-primary">
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}