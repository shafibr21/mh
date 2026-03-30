import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import ProfileCard from "../components/Dashboard/ProfileCard";
import SectionCard from "../components/Dashboard/SectionCard";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header className="sticky top-0" />
        <main className="p-2 max-w-7xl mx-auto w-full grow flex flex-col gap-6">
          <ProfileCard />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SectionCard title="Personal Information" editable>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">First Name</span>
                  <span className="col-span-2 text-gray-900">Dipak</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">Last Name</span>
                  <span className="col-span-2 text-gray-900">-</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">Nationality</span>
                  <span className="col-span-2 text-gray-900">-</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">
                    Country of Residence
                  </span>
                  <span className="col-span-2 text-gray-900">-</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">Address</span>
                  <span className="col-span-2 text-gray-900">gujarat</span>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Education History" addMore>
              {/* Optional Empty State or List */}
            </SectionCard>

            <SectionCard
              title="Language Qualifications"
              icon="translate"
              editable
            >
              <div className="grid grid-cols-3 text-sm">
                <span className="text-gray-500 font-medium">
                  English Status
                </span>
                <span className="col-span-2 text-gray-900">None</span>
              </div>
            </SectionCard>

            <SectionCard title="Employment History" icon="briefcase" addMore>
              <div className="flex justify-between items-center h-full text-sm">
                <span className="text-gray-400">
                  No Employment History Found.
                </span>
                <button className="flex items-center space-x-1 border px-4 py-2 rounded-full text-indigo-900 border-gray-300 bg-white font-medium hover:bg-gray-50 shadow-sm transition">
                  <span>↑ Timeline</span>
                </button>
              </div>
            </SectionCard>

            <SectionCard title="Immigration History" icon="book" addMore>
              <span className="text-sm text-gray-400">
                No immigration history added yet.
              </span>
            </SectionCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
