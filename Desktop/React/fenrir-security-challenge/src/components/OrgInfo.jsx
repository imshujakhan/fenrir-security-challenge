import { FiRefreshCw } from "react-icons/fi";

function OrgInfo() {
  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-14 text-xs text-gray-600 dark:text-gray-400">
          <span>
            <span className="text-xs">Org:</span>{" "}
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              Project X
            </span>
          </span>
          <span>|</span>
          <span>
            <span className="text-xs">Owner:</span>{" "}
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              Nammagiri
            </span>
          </span>
          <span>|</span>
          <span>
            <span className="text-xs">Total Scans:</span>{" "}
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              100
            </span>
          </span>
          <span>|</span>
          <span>
            <span className="text-xs">Scheduled:</span>{" "}
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <span>|</span>
          <span>
            <span className="text-xs">Rescans:</span>{" "}
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              100
            </span>
          </span>
          <span>|</span>
          <span>
            <span className="text-xs">Failed Scans:</span>{" "}
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              100
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FiRefreshCw size={14} />
          <span>10 min ago</span>
        </div>
      </div>
    </div>
  );
}

export default OrgInfo;
