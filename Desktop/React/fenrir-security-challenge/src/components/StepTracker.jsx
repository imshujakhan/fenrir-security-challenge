import { TbWorldSearch } from 'react-icons/tb';
import { GoGitPullRequest } from 'react-icons/go';
import { LuFlaskConical } from 'react-icons/lu';
import { LiaWpforms } from 'react-icons/lia';
import { RiDraftLine } from 'react-icons/ri';

const StepTracker = ({ steps, currentStep }) => {
  const stepIcons = [TbWorldSearch, GoGitPullRequest, LuFlaskConical, LiaWpforms, RiDraftLine];

  return (
    <div className="flex-1 w-full">
      <div className="flex justify-between">
        {steps.map((step, idx) => {
          const StepIcon = stepIcons[idx];
          return (
          <div key={step} className="flex items-start flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                idx <= currentStep
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}>
                <StepIcon size={16} />
              </div>
              <span className={`text-xs mt-2 whitespace-nowrap ${
                idx <= currentStep
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-500 dark:text-gray-500'
              }`}>
                {step}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`h-0.5 flex-1 mx-3 mt-4 ${
                idx < currentStep ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
              }`} />
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepTracker;
