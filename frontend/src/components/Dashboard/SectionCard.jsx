import React from "react";
import { Pencil, Plus } from "lucide-react";

const SectionCard = ({ title, icon, editable, addMore, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-purple-50/50">
        <div className="flex items-center gap-2 text-indigo-900 font-semibold text-sm tracking-wide">
          {icon && (
            <div className="text-indigo-400">
              {icon === "translate" && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              )}
              {icon === "briefcase" && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )}
              {icon === "book" && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              )}
            </div>
          )}
          {!icon && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
          {title}
        </div>

        <div className="flex gap-3 text-xs font-semibold">
          {editable && (
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-indigo-600 transition-colors">
              <Pencil size={12} /> Edit
            </button>
          )}
          {addMore && (
            <button className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition-colors">
              <Plus size={14} /> Add more
            </button>
          )}
        </div>
      </div>
      <div className="p-6 flex-1 min-h-[120px]">{children}</div>
    </div>
  );
};

export default SectionCard;
