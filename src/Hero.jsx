import heroSVG from "./assets/hero-2.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>My React-18 Projects </h2>
          <p>
            In my portfolio, you'll find a showcase of my latest endeavors in
            React-18, powered by <strong>Vite</strong>. Leveraging a robust
            stack including <strong>Axios</strong> for seamless data fetching,{" "}
            <strong>Context API</strong> and <strong>React Query</strong> for
            state management, and <strong>TailwindCSS</strong> for sleek UI,
            each project is a testament to my proficiency in modern web
            development. With <strong>React-Router-dom 6.4+</strong> ensuring
            smooth navigation and <strong>Redux-Toolkit</strong> adding depth to
            state management, my portfolio encapsulates a diverse range of
            skills and experiences in the realm of React development.
          </p>
        </div>

        <div className="img-container">
          <img
            src={heroSVG}
            alt="coder programming"
            className="img"
          />
        </div>
      </div>
    </section>
  );
}
