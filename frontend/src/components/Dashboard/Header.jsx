const steps = [
  "New Leads",
  "In Process",
  "Future Interest",
  "Cold Leads",
  "Applicant",
  "Ready To Convert",
  "Payment",
  "CAS Issued",
  "Enrolled",
];

const tabs = [
  "Details",
  "Documents",
  "Activities",
  "Application",
  "Compliance",
  "Query",
];

const Header = () => {
  return (
    <div className="p-2 flex flex-col gap-4" >
      <div className="bg-white border border-blue-300 px-2 py-2 flex flex-col gap-1 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-medium text-gray-400">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center flex-1 relative group">
              <div className="flex flex-col items-center flex-1 pt-1 opacity-50 relative z-10 cursor-pointer hover:opacity-100 transition-opacity">

                <div
                  className={`w-5 h-5 rounded-full mb-2 ${
                    idx === 0
                      ? "bg-purple-600 ring-4 ring-purple-100"
                      : "bg-gray-300"
                  }`}
                />
                <span
                  className={`${
                    idx === 0 ? "text-gray-900 font-semibold" : ""
                  } text-center`}
                >
                  {step}
                </span>
              </div>
              {/* Connector Line */}
              {idx < step.length - 1 && (
                <div className="absolute top-3 w-full left-1/2 h-[2px] bg-gray-200 " />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-blue-300 flex flex-col gap-1 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3 p-2">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-xs font-medium cursor-pointer transition-colors shadow-sm
              ${
                idx === 0
                  ? "bg-purple-600 text-white shadow-purple-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
