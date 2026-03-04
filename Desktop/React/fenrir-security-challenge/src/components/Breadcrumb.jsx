import { FiHome } from "react-icons/fi";

function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-900 text-lg dark:text-white font-bold ">
        {items[0]}
      </span>
      <FiHome className="text-gray-500 dark:text-gray-400" size={14} />
      {items.slice(1).map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">/</span>
          <span
            className={
              idx === items.slice(1).length - 1
                ? "text-primary dark:text-primary font-medium"
                : "text-gray-500 dark:text-gray-400"
            }
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
