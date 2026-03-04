import SeverityBadge from "./SeverityBadge";
import StatusChip from "./StatusChip";

function ScanTable({ scans, onRowClick }) {
  return (
    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-[#2A2A2A]">
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Scan Name
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Type
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Status
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Progress
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Vulnerabilities
            </th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400">
              Last Scan
            </th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => onRowClick(scan)}
              className="border-b border-gray-200 dark:border-[#2A2A2A] hover:bg-gray-50 dark:hover:bg-[#0F0F0F] cursor-pointer"
            >
              <td className="py-4 px-4">
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {scan.name}
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-900 dark:text-white">
                  {scan.type}
                </span>
              </td>
              <td className="py-4 px-4">
                <StatusChip status={scan.status} />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full max-w-[100px]">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${scan.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">
                    {scan.progress}%
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  {scan.vulnerabilities.critical > 0 && (
                    <SeverityBadge
                      severity="Critical"
                      count={scan.vulnerabilities.critical}
                    />
                  )}
                  {scan.vulnerabilities.high > 0 && (
                    <SeverityBadge
                      severity="High"
                      count={scan.vulnerabilities.high}
                    />
                  )}
                  {scan.vulnerabilities.medium > 0 && (
                    <SeverityBadge
                      severity="Medium"
                      count={scan.vulnerabilities.medium}
                    />
                  )}
                  {scan.vulnerabilities.low > 0 && (
                    <SeverityBadge
                      severity="Low"
                      count={scan.vulnerabilities.low}
                    />
                  )}
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-xs text-gray-400">{scan.lastScan}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScanTable;
