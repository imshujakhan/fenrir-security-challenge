import { FiShield, FiCheck, FiStar } from "react-icons/fi";

const features = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generates professional, enterprise-grade security reports automatically.",
];

const BrandingPanel = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative z-10 mt-20">
      <div className="mt-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Expert Level Cybersecurity in{" "}
          <span className="text-green-100">hours</span> not weeks
        </h2>

        <div className="space-y-4">
          <p className="text-gray-300 text-lg mt-12">What's included</p>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-primary/20">
                <FiCheck className="text-primary" size={16} />
              </div>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2">
          <FiStar className="text-primary fill-primary" size={16} />
          <span className="text-white font-medium">Trustpilot</span>
        </div>
        <p className="text-white text-lg font-semibold">
          Rated 4.5/5.0 <span className="text-gray-500 text-sm font-normal">(100k+ reviews)</span>
        </p>
      </div>
    </div>
  );
};

export default BrandingPanel;
