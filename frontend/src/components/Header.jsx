export default function Header() {
  return (
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-2xl font-semibold">
        Threat Intelligence Dashboard
      </h2>
      <div className="text-green-400 text-sm pulse">
        ● Active
      </div>
    </div>
  );
}