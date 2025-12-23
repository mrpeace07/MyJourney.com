import "./IntroSection.css";
import profile from "../assets/IMG_1480.jpeg";

export default function IntroSection() {
  return (
    <section className="intro-hero">
      <div className="intro-card">
        <div className="intro-avatar-wrap">
          <div className="avatar-scan-ring" />
          <img src={profile} alt="Nishanth S" className="intro-avatar" />
        </div>

        <div className="intro-text-block">
          <p className="intro-tagline">Building, capturing, writing, wandering.</p>
          <h1 className="intro-name">Nishanth S</h1>
          <p className="intro-body">
            A guy who wants to build software, capture moments through his lens,
            write his book about how he feels, and explore the world along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
