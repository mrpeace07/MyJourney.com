import { useEffect, useState, useRef } from "react";
import { JOURNEY_STOPS } from "../../data/journey";
import "./Journey.css";
import busImg from "../../assets/bus.png";

const STEP_GAP_DESKTOP = 420;
const STEP_GAP_MOBILE = 210;
const DESKTOP_START_X = 220; // stand x on desktop

export default function JourneySection() {
  const [started, setStarted] = useState(false);
  const [currentStop, setCurrentStop] = useState(-1); // -1 = stand
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const FULL_JOURNEY = JOURNEY_STOPS;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto: stand -> ig -> yt -> ...
  useEffect(() => {
    if (!started) return;
    if (currentStop < FULL_JOURNEY.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStop((prev) => prev + 1);
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [started, currentStop, FULL_JOURNEY.length]);

  const getOffset = (idx) => {
    if (isMobile) {
      if (idx < 0) return STEP_GAP_MOBILE * 0.5;   // stand
      return STEP_GAP_MOBILE * (idx + 1);         // each stop lower
    }
    if (idx < 0) return DESKTOP_START_X;
    return DESKTOP_START_X + STEP_GAP_DESKTOP * (idx + 1);
  };

  const busPosition = !started ? 0 : getOffset(currentStop);

  // road ends just past last stop
  const lastOffset = getOffset(FULL_JOURNEY.length - 1);
  const trackLength = lastOffset + (isMobile ? 60 : 120);

  // stand smoke on both: once currentStop >= 0
  const standClass =
    !started || currentStop === -1
      ? "journey-start-stand"
      : "journey-start-stand smoke-out";

  return (
    <section className="journey-container" ref={containerRef}>
      {!started ? (
        <div className="onboard">
          <img src={busImg} alt="bus" className="bus-onboard" />
          <h2>The Universe Awaits...</h2>
          <button className="start-btn" onClick={() => setStarted(true)}>
            Enter the Void 🚀
          </button>
        </div>
      ) : (
        <div
          className="journey-track"
          style={{
            [isMobile ? "height" : "width"]: `${trackLength}px`,
          }}
        >
          {/* road + progress */}
          <div className="road" />
          <div
            className="road-progress"
            style={{
              [isMobile ? "height" : "width"]: `${busPosition}px`,
            }}
          />

          {/* bus */}
          <img
            src={busImg}
            alt="bus"
            className="bus-moving"
            style={{ "--bus-offset": `${busPosition}px` }}
          />

          {/* stand */}
          <div
            className={standClass}
            style={!isMobile ? { left: `${DESKTOP_START_X}px` } : {}}
          >
            <svg
              className="start-stand-svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.962 2 6.5 4.462 6.5 7.5C6.5 10.538 9.25 14.5 12 20C14.75 14.5 17.5 10.538 17.5 7.5C17.5 4.462 15.038 2 12 2ZM12 9.5C10.895 9.5 10 8.605 10 7.5C10 6.395 10.895 5.5 12 5.5C13.105 5.5 14 6.395 14 7.5C14 8.605 13.105 9.5 12 9.5Z" />
            </svg>
            <span>Let&apos;s begin the journey</span>
          </div>

          {/* spacer under stand on mobile */}
          {isMobile && <div style={{ height: STEP_GAP_MOBILE * 0.2 }} />}

          {/* stops */}
          {FULL_JOURNEY.map((stop, idx) => {
            const isActive = currentStop >= idx; // show when bus reaches
            const positionClass = isMobile
              ? ""
              : idx % 2 === 0
                ? "up"
                : "down";

            const cardStyle = isMobile ? {} : { left: `${getOffset(idx)}px` };

            return (
              <div
                key={stop.id}
                className={`stop ${positionClass} ${isActive ? "active" : ""}`}
                style={cardStyle}
              >
                <div className="icon">
                  {stop.icon && (
                    <img src={stop.icon} alt={stop.label} className="stop-icon-img" />
                  )}
                </div>
                <h3>{stop.label}</h3>
                <p>{stop.info}</p>
                {stop.url && (
                  <a
                    href={stop.url}
                    target="_blank"
                    rel="noreferrer"
                    className="visit-link"
                  >
                    Explore →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
