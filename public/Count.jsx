const Count = ({ label, count, className }) => (
  <div className={className}>
    <h2 className="text-2xl font-semibold">{label}</h2>
    <p className="text-4xl font-bold">{count}</p>
  </div>
);

export default Count;
