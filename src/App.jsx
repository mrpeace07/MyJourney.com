import IntroSection from "./components/IntroSection";
import JourneySection from "./components/journey/JourneySection";
import LinkSection from "./components/LinkSection";
import "./index.css";

export default function App() {
  return (
    <main className="universe-shell">
      <div className="container">
        <IntroSection />
        <JourneySection />
      </div>
    </main>
  );
}
