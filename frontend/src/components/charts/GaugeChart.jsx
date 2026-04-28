export default function GaugeChart({ value }) {
  const degree = (value / 100) * 180;

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="relative w-48 h-24 overflow-hidden">
        <div className="absolute w-full h-full rounded-t-full bg-gray-700"></div>

        <div
          className="absolute w-full h-full rounded-t-full bg-green-500"
          style={{
            clipPath: `polygon(50% 50%, 0 0, ${degree}% 0)`
          }}
        />
      </div>
    </div>
  );
}