import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import ProgressCircle from "../components/ProgressCircle";
import StepTracker from "../components/StepTracker";
import LiveConsole from "../components/LiveConsole";
import ScanMetricsBar from "../components/ScanMetricsBar";
import Logo from "../components/Logo";
import Breadcrumb from "../components/Breadcrumb";
import { useToast } from "../context/ToastContext";
import {
  activeScan,
  activityLogs,
  findings,
  scanMetrics,
} from "../data/mockData";

const ScanDetail = () => {
  const { id } = useParams();
  const { showToast } = useToast();

  function handleExportReport() {
    showToast('Scan report exported successfully', 'success');
  }

  function handleStopScan() {
    showToast('Scan stopped successfully', 'error');
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F] relative">
      <div className="absolute top-6 left-6 z-50">
        <Logo />
      </div>
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-[#2A2A2A] p-4">
          <div className="flex items-center justify-between">
            <Breadcrumb items={["Scan", "Private Assets", "New Scan"]} />
            <div className="flex items-center gap-3">
              <button 
                onClick={handleExportReport}
                className="btn-secondary bg-white border-2 text-sm px-3 py-2"
              >
                Export Report
              </button>
              <button 
                onClick={handleStopScan}
                className="btn-secondary text-red-600 bg-red-100 text-sm px-3 py-2"
              >
                Stop Scan
              </button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="p-1">
          <div className="flex flex-col lg:flex-row card mb-6 rounded-lg border border-gray-300 dark:border-gray-600 lg:divide-x divide-gray-300 dark:divide-gray-600">
            <div className="flex-shrink-0 flex flex-col items-center justify-center px-6 py-4">
              <ProgressCircle progress={activeScan.progress} />
            </div>
            <div className="flex-1 flex flex-col px-6 py-4">
              <StepTracker
                steps={activeScan.steps}
                currentStep={activeScan.currentStep}
              />
              <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-4 lg:gap-12 text-xs">
                <div>
                  <div className="text-gray-400 mb-1">Scan Type</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.type}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Targets</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.targets}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Started At</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.startedAt}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Credentials</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.credentials}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Files</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.files}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Checklists</div>
                  <div className="text-black font-bold dark:text-white">
                    {activeScan.checklists}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-6 rounded-lg border border-gray-300 dark:border-gray-600 shadow-md">
            <LiveConsole logs={activityLogs} findings={findings} />
          </div>

          <div className="mt-6">
            <ScanMetricsBar metrics={scanMetrics} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScanDetail;
