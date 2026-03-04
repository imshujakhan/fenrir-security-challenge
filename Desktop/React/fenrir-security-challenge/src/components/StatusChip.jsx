function StatusChip({ status }) {
  const colors = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    "In Progress":
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Scheduled: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
    Failed: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusChip;
