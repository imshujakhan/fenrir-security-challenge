import { useState } from 'react';
import { FiEye, FiChevronDown, FiX } from 'react-icons/fi';

const LiveConsole = ({ logs, findings }) => {
  const [activeTab, setActiveTab] = useState('activity');

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Live Scan Console</h3>
          <FiEye className="text-gray-400" size={16} />
          <span className="text-xs text-gray-400">Running...</span>
        </div>
        <div className="flex items-center gap-2">
          <FiChevronDown className="text-gray-400" size={16} />
          <FiX className="text-gray-400" size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-gray-300 dark:divide-gray-600">
        <div className="px-4 py-3">
          <div className="flex gap-4 mb-3 pb-2 border-b border-gray-300 dark:border-gray-600 -mx-4 px-4">
            <button
              onClick={() => setActiveTab('activity')}
              className={`text-xs font-medium pb-2 border-b-2 transition-colors ${
                activeTab === 'activity'
                  ? 'border-primary text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-400'
              }`}
            >
              Activity Log
            </button>
            <button
              onClick={() => setActiveTab('verification')}
              className={`text-xs font-medium pb-2 border-b-2 transition-colors ${
                activeTab === 'verification'
                  ? 'border-primary text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-400'
              }`}
            >
              Verification Loops
            </button>
          </div>
          <div className="h-96 overflow-y-auto font-mono text-xs">
            {logs.map((log, idx) => (
              <div key={idx} className="mb-2 flex gap-3">
                <span className="text-gray-400">[{log.time}]</span>
                <span className={`flex-1 ${
                  log.type === 'error' ? 'text-red-600 dark:text-red-400' :
                  log.type === 'warning' ? 'text-yellow-600 dark:text-yellow-400' :
                  log.type === 'success' ? 'text-green-600 dark:text-green-400' :
                  'text-gray-600 dark:text-gray-300'
                }`}>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-3 border-t lg:border-t-0 border-gray-300 dark:border-gray-600">
          <h4 className="text-xs font-medium text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-300 dark:border-gray-600 -mx-4 px-4">Finding Log</h4>
          <div className="space-y-3">
            {findings.slice(0, 3).map((finding) => (
              <div key={finding.id} className="card p-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    finding.severity === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                    finding.severity === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                    finding.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  }`}>
                    {finding.severity}
                  </span>
                  <span className="text-[10px] text-gray-400">{finding.time}</span>
                </div>
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">{finding.title}</h4>
                <p className="text-[10px] text-gray-400 mb-1">{finding.endpoint}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveConsole;
