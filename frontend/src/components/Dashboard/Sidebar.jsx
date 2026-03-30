import {
  MapPin,
  Building,
  Calendar,
  CircleCheck,
  CircleUser,
  Users,
  FileCheck,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, value, readOnly }) => (
  <div className="py-2.5 px-4 flex items-center gap-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors border border-transparent mx-2 my-1">
    <div className="p-2 rounded-full bg-purple-100 text-purple-700">
      <Icon size={18} />
    </div>
    <div className="flex flex-col flex-1">
      <span className="text-xs font-semibold text-gray-900 leading-tight">
        {label}
      </span>
      {readOnly ? (
        <span className="text-xs text-gray-500 mt-0.5">{value}</span>
      ) : (
        <select className="text-xs text-gray-600 bg-transparent mt-0.5 outline-none focus:ring-0 cursor-pointer appearance-none">
          <option>{value}</option>
        </select>
      )}
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col shadow-sm h-full shrink-0 z-10 m-3 rounded-2xl">
      <div className="p-4 border-b border-gray-100 flex items-center gap-2">
        <div className="text-purple-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        <SidebarItem icon={MapPin} label="Region" value="..." readOnly />
        <SidebarItem icon={Building} label="Branch" value="..." readOnly />
        <SidebarItem icon={Calendar} label="Intake Month" value="February" />
        <SidebarItem icon={Calendar} label="Intake Year" value="Intake Year" />
        <SidebarItem
          icon={FileCheck}
          label="Verification Status"
          value="Not Verified"
          readOnly
        />
        <SidebarItem
          icon={CircleUser}
          label="Applicant Status"
          value="New Leads"
        />
        <SidebarItem
          icon={CircleCheck}
          label="Applicant Sub Status"
          value="New"
        />
        <SidebarItem
          icon={Users}
          label="Application Executive"
          value="Application executive"
        />
        <SidebarItem
          icon={ShieldCheck}
          label="Compliance User"
          value="..."
          readOnly
        />
        <SidebarItem icon={UserCheck} label="Cre User" value="..." readOnly />
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-indigo-900 text-white py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors shadow-sm text-sm tracking-wide">
          Save
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
