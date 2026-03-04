import { Link, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiFolderPlus,
  FiActivity,
  FiClock,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import Logo from "./Logo";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", icon: FiGrid, path: "/dashboard" },
  { name: "Projects", icon: FiFolderPlus, path: "/projects" },
  { name: "Scans", icon: FiActivity, path: "/scan/2" },
  { name: "Schedule", icon: FiClock, path: "/schedule", divider: true },
  { name: "Notifications", icon: FiBell, path: "/notifications" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
  { name: "Support", icon: FiHelpCircle, path: "/support" },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#1A1A1A] border-r border-gray-300 dark:border-gray-600 flex flex-col transition-transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <Logo />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full transition-colors text-sm ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#0F0F0F]"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
                {item.divider && (
                  <div className="my-3 border-t border-gray-200 dark:border-[#2A2A2A]"></div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-[#2A2A2A]">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                John Doe
              </p>
              <div className="flex items-center gap-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Admin
                </p>
                <FiChevronRight
                  size={12}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
