"use client";

import { useState } from "react";

export default function ApplyForm({ openForm, setOpenForm }) {
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(null);

  if (!openForm) return null;

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || "");
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

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
        <div className="text-center mb-8">
          <div className="text-[11px] uppercase tracking-[3px] text-[#E8001C] font-bold mb-2">
            Join Our Team
          </div>
          <h2 className="vm-apply-display text-2xl sm:text-3xl font-extrabold text-gray-900">
            Apply Now
          </h2>
        </div>
        <div className="px-5 sm:px-8 pb-20 max-w-5xl">
          <form className="flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Date of Birth
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Gender
                </label>
                <select className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white">
                  <option value="">Choose Option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  CNIC Number
                </label>
                <input
                  type="text"
                  placeholder="#####-#######-#"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Cell Number
                </label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Qualification
                </label>
                <input
                  type="text"
                  placeholder="e.g. BBA, Intermediate"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right">
                  Position Applying For
                </label>
                <select className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white">
                  <option value="">Select a position</option>
                  <option value="cashier">Cashier</option>
                  <option value="sales-associate">Sales Associate</option>
                  <option value="warehouse-staff">Warehouse Staff</option>
                  <option value="customer-service">Customer Service</option>
                  <option value="management">Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wide sm:w-40 sm:shrink-0 sm:text-right sm:pt-2.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a bit about yourself"
                  className="vm-apply-input w-full sm:max-w-md border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white resize-none"
                />
              </div>

              <div className="flex justify-center sm:justify-start sm:pl-[184px] mt-3">
                <button
                  type="submit"
                  className="vm-apply-btn bg-[#b60a01] hover:bg-[#c0001a] text-white font-bold text-sm px-10 py-3.5 rounded-xl border-none cursor-pointer uppercase tracking-wide"
                >
                  Submit Application
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start shrink-0">
              <label className="vm-apply-upload flex flex-col items-center justify-center gap-2 w-36 h-36 border-2 border-dashed border-gray-300 rounded-xl bg-white cursor-pointer text-gray-400 overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                      <polyline points="7 9 12 4 17 9" />
                      <line x1="12" y1="4" x2="12" y2="16" />
                    </svg>
                    <span className="text-xs font-medium text-gray-500">
                      Upload Image
                    </span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*,.pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFile}
                />
              </label>
              {fileName && (
                <span className="text-[11px] text-gray-400 mt-2 max-w-[9rem] truncate text-center">
                  {fileName}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
