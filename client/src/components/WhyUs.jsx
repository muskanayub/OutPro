import { motion } from "framer-motion";

const data = [
  {
    title: "Industry Expertise",
    img: "https://images.unsplash.com/photo-1758906819465-b2fde39d715d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZHVzdHJ5JTIwZXhwZXJ0aXNlfGVufDB8fDB8fHww"
  },

  {
    title: "Luxury Event Execution",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
  },

  {
    title: "Athlete Branding",
    img: "https://plus.unsplash.com/premium_photo-1709168768848-15ee4980b559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF0aGxldGUlMjBicmFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
  },

  {
    title: "Data-driven Planning",
    img: "https://images.unsplash.com/photo-1758691736483-5f600b509962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGRyaXZlbiUyMHBsYW5uaW5nfGVufDB8fDB8fHww"
  }
];

export default function WhyUs() {
  return (
    <section
  className="section"
  id="whyus"
>

      <div className="container">

        <h2 className="section-title">
          Why Choose Outpro
        </h2>

        <div className="grid">

          {data.map((item, i) => (

            <motion.div
              key={i}
              className="why-card"
              whileHover={{ y: -10 }}
            >

              <img
                src={item.img}
                className="why-img"
              />

              <div className="why-overlay">

                <h3>{item.title}</h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}