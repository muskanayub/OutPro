import "../styles/hero.css";

export default function Hero() {

  return (

    <section className="hero">

      <div className="container hero-content">

        {/* LEFT */}
        <div className="hero-images">

          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
            alt=""
            className="hero-img img-one"
          />

          <img
            src="https://images.unsplash.com/photo-1547347298-4074fc3086f0"
            alt=""
            className="hero-img img-two"
          />

        </div>

        {/* RIGHT */}
        <div className="hero-text">

          <div className="badge">
            Premium Sports & Event Experiences
          </div>

          <h1>
            The Premier Platform
            for Sports & Events
          </h1>

          <p>
            Luxury sports experiences engineered
            with precision, innovation,
            and unforgettable execution.
          </p>

          <div className="hero-buttons">

            <a href="/contact">
              <button className="btn-primary">
                Get Started
              </button>
            </a>

            <button
              className="btn-secondary"
              onClick={() => {

                const section =
                  document.getElementById("whyus");

                section?.scrollIntoView({
                  behavior: "smooth"
                });

              }}
            >
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}