function ScanMetricsBar({ metrics }) {
  return (
    <div className="border-t border-gray-300 dark:border-gray-600">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6 text-xs text-gray-600 dark:text-gray-400">
          <span>Sub-agents: {metrics.subAgents}</span>
          <span>• Parallel Executions: {metrics.parallelExecutions}</span>
          <span>• Operations: {metrics.operations.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-red-600 dark:text-red-400">
            Critical: {metrics.severityCounts.critical}
          </span>
          <span className="text-orange-600 dark:text-orange-400">
            High: {metrics.severityCounts.high}
          </span>
          <span className="text-yellow-600 dark:text-yellow-400">
            Medium: {metrics.severityCounts.medium}
          </span>
          <span className="text-green-600 dark:text-green-400">
            Low: {metrics.severityCounts.low}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScanMetricsBar;
