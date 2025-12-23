import IntroSection from "../components/IntroSection";
import JourneySection from "../components/journey/JourneySection";

export default function LinkHubPage() {
  return (
    <main className="page">
      <div className="layout">
        <IntroSection />
        <JourneySection />
      </div>
    </main>
  );
}
