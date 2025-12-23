import { useState } from "react";
import { JOURNEY_STOPS } from "../data/journey";
import "./Journey.css";

export default function JourneyPage() {
  const [started, setStarted] = useState(false);
  const [activeStop, setActiveStop] = useState(0);

  const startJourney = () => setStarted(true);

  const goToStop = (idx) => {
    setActiveStop(idx);
    const stop = JOURNEY_STOPS[idx];
    window.open(stop.url, "_blank");
  };

  return (
    <div className="journey-wrapper">
      {!started && (
        <button className="start-btn" onClick={startJourney}>
          Enter the World
        </button>
      )}

      {started && (
        <>
          <svg className="curved-road" viewBox="0 0 800 300">
            <path
              d="M50,250 C200,100 600,100 750,250"
              stroke="#FFD700"
              strokeWidth="6"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>

          <div className="stops-container">
            {JOURNEY_STOPS.map((stop, idx) => {
              const percent = (idx / (JOURNEY_STOPS.length - 1)) * 100;
              return (
                <div
                  key={stop.id}
                  className={`stop ${activeStop === idx ? "active" : ""}`}
                  style={{ left: `${percent}%` }}
                  onClick={() => goToStop(idx)}
                >
                  <div className="card">
                    <stop.icon />
                    <span>{stop.label}</span>
                  </div>
                </div>
              );
            })}
            <div
              className="bus"
              style={{
                left: `${(activeStop / (JOURNEY_STOPS.length - 1)) * 100}%`,
              }}
            >
              🚌
            </div>
          </div>
        </>
      )}
    </div>
  );
}
