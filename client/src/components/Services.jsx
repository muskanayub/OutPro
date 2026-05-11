import { motion } from "framer-motion";

const services = [
  {
    title: "Sports Events",
    img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
    desc: "Premium sports event execution with world-class coordination."
  },
  {
    title: "Athlete Branding",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    desc: "Building powerful athlete identities and sponsorship visibility."
  },
  {
    title: "Corporate Events",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcnBvcmF0ZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    desc: "Luxury event experiences for brands and organizations."
  }
];

export default function Services() {
  return (
    <section className="section">

      <div className="container">

        <h2>Our Services</h2>

        <div className="grid">

          {services.map((s, i) => (
            <motion.div
              key={i}
              className="card service-card"
              whileHover={{ y: -10 }}
            >
              <img src={s.img} className="service-img" />

              <h3>{s.title}</h3>

              <p>{s.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}