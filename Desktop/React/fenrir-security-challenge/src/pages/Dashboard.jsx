import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import ScanTable from "../components/ScanTable";
import Breadcrumb from "../components/Breadcrumb";
import OrgInfo from "../components/OrgInfo";
import { useToast } from "../context/ToastContext";
import { scans, orgStats } from "../data/mockData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredScans, setFilteredScans] = useState(scans);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredScans(scans);
    } else {
      setFilteredScans(
        scans.filter(
          (scan) =>
            scan.name.toLowerCase().includes(query.toLowerCase()) ||
            scan.type.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }
  };

  const handleRowClick = (scan) => {
    navigate(`/scan/${scan.id}`);
  };

  function handleExportReport() {
    showToast('Report exported successfully', 'success');
  }

  function handleStopScan() {
    showToast('Scan stopped', 'error');
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0F0F0F] relative">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-[#2A2A2A] p-4">
          <div className="flex items-center justify-between">
            <Breadcrumb items={["Scan", "Private Assets", "New Scan"]} />
            <div className="flex items-center gap-3">
              <button 
                onClick={handleExportReport}
                className="btn-secondary bg-white border-2 text-sm px-3 py-2 "
              >
                Export Report
              </button>
              <button 
                onClick={handleStopScan}
                className="btn-secondary text-red-600 bg-red-100 text-sm px-3 py-2 dark:text-red-600 dark:bg-[#4d14146b]"
              >
                Stop Scan
              </button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="p-1">
          <div className="card mb-3">
            <OrgInfo />
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(orgStats).map(([severity, data]) => (
                  <StatsCard
                    key={severity}
                    severity={severity}
                    count={data.count}
                    change={data.change}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
            </div>

            <ScanTable scans={filteredScans} onRowClick={handleRowClick} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
