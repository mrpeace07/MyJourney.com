export default function Camera({ stopIndex }) {
  const leftPercentages = ["10%", "30%", "50%", "70%", "90%"];
  const topPercentages = ["80%", "60%", "70%", "50%", "60%"];

  return (
    <div
      className="camera"
      style={{
        left: leftPercentages[stopIndex],
        top: topPercentages[stopIndex],
      }}
    >
      🚍
    </div>
  );
}
