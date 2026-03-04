const ScanMetadata = ({ scan }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 border-t border-gray-200 dark:border-[#2A2A2A]">
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Scan Type</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{scan.type}</div>
      </div>
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Targets</div>
        <div className="text-sm font-medium text-primary truncate">{scan.targets}</div>
      </div>
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Started At</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{scan.startedAt}</div>
      </div>
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Credentials</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{scan.credentials}</div>
      </div>
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Files</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{scan.files}</div>
      </div>
      <div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Checklists</div>
        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{scan.checklists}</div>
      </div>
    </div>
  );
};

export default ScanMetadata;
