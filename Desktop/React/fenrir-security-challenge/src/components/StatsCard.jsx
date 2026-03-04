import { FiArrowUp, FiArrowDown, FiAlertCircle } from "react-icons/fi";

const StatsCard = ({ severity, count, change }) => {
  const isIncrease = change.startsWith("+");

  return (
    <div className="card  ">
      <div className="flex items-center gap-19 mb-3">
        <span className="text-l font-medium text-gray-600 dark:text-gray-400">
          {severity}
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <FiAlertCircle
            className="text-gray-600 dark:text-gray-400"
            size={16}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {count}
        </div>
        <span
          className={`text-[10px] font-medium flex items-center gap-1 ${
            isIncrease ? "text-green-500" : "text-red-500"
          }`}
        >
          {isIncrease ? <FiArrowUp size={12} /> : <FiArrowDown size={12} />}
          {change} {isIncrease ? "increase" : "decrease"} than yesterday
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
