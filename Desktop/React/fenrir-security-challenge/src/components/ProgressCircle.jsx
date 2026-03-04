function ProgressCircle({ progress }) {
  return (
    <div className="w-24 h-24 rounded-full bg-black  flex flex-col items-center justify-center dark:bg-gray-900">
      <span className="text-xl font-bold text-[#0cc8a8]">{progress}%</span>
      <span className="text-[10px] text-white mt-1">In Progress</span>
    </div>
  );
}

export default ProgressCircle;
