function SeverityBadge({ severity, count }) {
  const colors = {
    Critical: 'bg-red-500 text-white',
    High: 'bg-orange-500 text-white',
    Medium: 'bg-yellow-500 text-white',
    Low: 'bg-green-500 text-white',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${colors[severity]}`}>
      {count !== undefined ? count : severity}
    </span>
  );
}

export default SeverityBadge;
