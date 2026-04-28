export default function Timeline({ logs }) {
  return (
    <div className="glass card">
      <h3>Attack Timeline</h3>

      {logs.map((l, i) => (
        <div key={i} style={{margin:"10px 0"}}>
          {l.time} — {l.text}
        </div>
      ))}
    </div>
  );
}