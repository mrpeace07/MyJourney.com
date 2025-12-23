export default function StoryCard({ stop, active, onNext }) {
  return (
    <div className={`story-card ${active ? "active" : ""}`}>
      <h3 style={{ color: stop.color }}>{stop.label}</h3>
      <p>{stop.description}</p>
      {active && (
        <button className="next-btn" onClick={onNext}>
          Next →
        </button>
      )}
    </div>
  );
}
