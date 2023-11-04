import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Use from "./components/Use/components/Use";
export default function Home() {
  return (
    <main className="main">
      <section>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
        <span className="starAnimation"></span>
      </section>
      <Hero />
      <About />
      <Use />
    </main>
  );
}
