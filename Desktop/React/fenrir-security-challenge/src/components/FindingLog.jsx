import SeverityBadge from './SeverityBadge';

const FindingLog = ({ findings }) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Finding Log</h3>
      
      <div className="space-y-3 h-96 overflow-y-auto">
        {findings.map((finding) => (
          <div key={finding.id} className="p-4 rounded-lg border border-gray-200 dark:border-[#2A2A2A] bg-gray-50 dark:bg-[#0F0F0F]">
            <div className="flex items-start justify-between mb-2">
              <SeverityBadge severity={finding.severity} />
              <span className="text-xs text-gray-500">{finding.time}</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{finding.title}</h4>
            <div className="text-sm text-primary mb-2 font-mono">{finding.endpoint}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{finding.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindingLog;
