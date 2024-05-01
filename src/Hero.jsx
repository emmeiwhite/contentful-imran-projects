import heroSVG from "./assets/hero-2.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My React-18 Projects </h1>
          <p>
            Discover my latest React-18 projects, powered by <em>Vite</em>.
            Leveraging <em>Axios</em> for data fetching, <em>Context API</em>{" "}
            and <em>React Query</em> for state management, and{" "}
            <em>TailwindCSS</em> for UI. With <em>React-Router-dom 6.4+</em> for
            navigation and <em>Redux-Toolkit</em> for state, showcasing diverse
            skills in React development."
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
