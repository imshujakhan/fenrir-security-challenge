import { FiSearch, FiFilter, FiColumns, FiPlus } from "react-icons/fi";
import { useToast } from "../context/ToastContext";

function SearchBar({ searchQuery, onSearch }) {
  const { showToast } = useToast();

  function handleFilter() {
    showToast('Filter panel opened', 'info');
  }

  function handleColumns() {
    showToast('Column settings opened', 'info');
  }

  function handleNewScan() {
    showToast('New scan initiated successfully', 'success');
  }

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="relative w-[70%]">
        <FiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search scans..."
          className="input-field pl-10 w-full h-10"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 flex-1 justify-end">
        <button 
          onClick={handleFilter}
          className="btn-secondary bg-white dark:bg-[#1A1A1A] border-2 border-gray-300 dark:border-gray-600 flex items-center gap-2 text-sm px-3 h-10"
        >
          <FiFilter size={16} />
          <span className="hidden sm:inline">Filter</span>
        </button>
        <button 
          onClick={handleColumns}
          className="btn-secondary bg-white dark:bg-[#1A1A1A] border-2 border-gray-300 dark:border-gray-600 flex items-center gap-2 text-sm px-3 h-10"
        >
          <FiColumns size={16} />
          <span className="hidden sm:inline">Columns</span>
        </button>
        <button 
          onClick={handleNewScan}
          className="btn-primary flex items-center gap-2 text-sm px-3 h-10"
        >
          <FiPlus size={16} />
          <span className="hidden sm:inline">New Scan</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
