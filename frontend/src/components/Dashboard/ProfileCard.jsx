import React from "react";
import { Pencil, User, Mail, Phone, Hash } from "lucide-react";
import { CalendarIcon } from "../ui/CalendarIcon";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2 flex items-start gap-6 relative">
      <div className="flex items-center gap-10 ">
        <div className="flex items-center gap-5 ">
        <div className="shrink-0 w-24 h-24 rounded-xl bg-pink-600 flex items-center justify-center text-4xl font-bold text-white shadow-md">
          DI
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Dipak
            </h2>
            <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 border border-gray-200 shadow-sm transition-colors cursor-pointer">
              <Pencil size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
            <div className="bg-blue-900 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 font-bold">
              <span className="text-[10px] uppercase tracking-wide opacity-80">
                MH
              </span>{" "}
              AHZ
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarIcon className="w-4 h-4" />
            <span>Created: 2026-03-27</span>
          </div>
          </div>
          
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-2 space-y-2.5 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <User size={14} className="text-gray-400" />
            <span>
              Assigned to:{" "}
              <span className="font-semibold text-gray-900">Exam</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Hash size={14} className="text-gray-400" />
            <span>
              Status:{" "}
              <span className="font-medium text-gray-800">New Leads</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span>
              Sub-status: <span className="font-medium text-gray-800">New</span>
            </span>
          </div>

          <div className="pt-2 border-t border-gray-200 flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-gray-400" />
              <span>+8801XXXXXXX</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={14} className="text-gray-400" />
              <a
                href="mailto:xxxxx@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                xxxxx@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <button className="flex items-center gap-2 px-2 py-1 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
          <Mail size={16} className="text-gray-400" />
          Email
        </button>
      </div>
    </div>
  );
};



export default ProfileCard;
