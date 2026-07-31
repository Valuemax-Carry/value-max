"use client";

import { useState } from "react";

export default function ApplyForm({ openForm, setOpenForm }) {
  const [fileName, setFileName] = useState("");

  if (!openForm) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .vm-apply { font-family: 'Poppins', sans-serif; }
        .vm-apply-display { font-family: 'Playfair Display', serif; }

        .vm-apply-panel { animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }

        .vm-apply-input {
          font-family: 'Poppins', sans-serif;
          transition: all 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-apply-input:focus {
          outline: none;
          border-color: #b60a01;
          box-shadow: 0 0 0 3px rgba(182,10,1,0.12);
        }

        .vm-apply-btn {
          transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,0,28,0.28);
        }
        .vm-apply-btn:active { transform: translateY(0); }

        .vm-apply-upload {
          transition: all 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .vm-apply-upload:hover {
          border-color: #b60a01;
          background: #fff5f5;
        }
      `}</style>

      <div className="vm-apply vm-apply-panel bg-white">
        <div className="max-w-[880px] mx-auto px-5 sm:px-8 pb-20">
          <div className="text-center mb-8">
            <div className="text-[11px] uppercase tracking-[3px] text-[#E8001C] font-bold mb-2">
              Join Our Team
            </div>
            <h2 className="vm-apply-display text-2xl sm:text-3xl font-extrabold text-gray-900">
              Apply Now
            </h2>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 items-start">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Date of Birth
              </label>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Gender
              </label>
              <select className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white">
                <option value="">Choose Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                CNIC Number
              </label>
              <input
                type="text"
                placeholder="#####-#######-#"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Cell Number
              </label>
              <input
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Position Applying For
              </label>
              <select className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white">
                <option value="">Select a position</option>
                <option value="cashier">Cashier</option>
                <option value="sales-associate">Sales Associate</option>
                <option value="warehouse-staff">Warehouse Staff</option>
                <option value="customer-service">Customer Service</option>
                <option value="management">Management</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Upload CV / Resume
              </label>
              <label className="vm-apply-input vm-apply-upload flex items-center justify-between w-full border-2 border-dashed border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-400 bg-white cursor-pointer">
                <span className="truncate">
                  {fileName || "Choose a file (PDF, DOC)"}
                </span>
                <span className="text-[#E8001C] font-semibold whitespace-nowrap ml-3">
                  Browse
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name || "")
                  }
                />
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-800 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us a bit about yourself"
                className="vm-apply-input w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white resize-none"
              />
            </div>

            <div className="sm:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="vm-apply-btn bg-[#b60a01] hover:bg-[#c0001a] text-white font-bold text-sm px-10 py-3.5 rounded-xl border-none cursor-pointer uppercase tracking-wide"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}