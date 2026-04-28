export default function Pipeline({ active }) {

  const steps = [
    "Text Intelligence",
    "Voice Intelligence",
    "Fusion Engine",
    "Correlation Engine"
  ];

  return (
    <div className="glass card">
      <h3>4-Layer AI Pipeline</h3>

      {steps.map((step, i) => (
        <div
          key={i}
          className={`pipeline-step ${active > i ? "active" : ""}`}
        >
          {i + 1}. {step}
        </div>
      ))}
    </div>
  );
}