import React, { useState } from "react";

const Performa = () => {
  const [form, setForm] = useState({
    nameOfCandidate: "",
    fatherName: "",
    nameOfExamination: "",
    departmentMajor: "",
    seatNo: "",
    enrollmentNo: "",
    program: "",
    semester: "",
    contactNo: "",
    cnic: "",
    address: "",
    remarks: "",
  });

  const updateField = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nameOfCandidate || !form.seatNo || !form.departmentMajor) {
      alert("Please fill required fields (Name, Seat No, Department).");
      return;
    }

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
      status: "Pending Department Approval",
    };

    console.log("Performa submitted payload:", payload);
    alert("Performa submitted (check console). Replace with your API call.");
  };

  const documents = [
    "Photocopy of Enrollment Card",
    "Photocopy of CNIC",
    "Photocopy of Matric Certificate",
    "Photocopy of Admit Card (if any)",
  ];

  return (
    <div className="w-screen h-screen overflow-auto p-6 md:p-12 print:p-0 bg-white">
      {/* Header */}
      <div className="border-b pb-4 mb-6 print:mb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 uppercase print:text-black">
              University Examination Performa
            </h1>
            <p className="text-sm text-gray-600 mt-1 print:text-black">Examination Section</p>
          </div>
          <div className="text-sm text-gray-500 mt-3 md:mt-0 print:text-black">
            <div>Form No: __________</div>
            <div>Date: __________</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Candidate Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">
              Name of Candidate (as per record) *
            </label>
            <input
              value={form.nameOfCandidate}
              onChange={(e) => updateField("nameOfCandidate", e.target.value)}
              placeholder="Full Name"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Father's Name</label>
            <input
              value={form.fatherName}
              onChange={(e) => updateField("fatherName", e.target.value)}
              placeholder="Father's Name"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
        </div>

        {/* Examination Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Name of Examination</label>
            <input
              value={form.nameOfExamination}
              onChange={(e) => updateField("nameOfExamination", e.target.value)}
              placeholder="e.g., Annual Examination 2024"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Department (Major) *</label>
            <input
              value={form.departmentMajor}
              onChange={(e) => updateField("departmentMajor", e.target.value)}
              placeholder="e.g., BS-Computer Science"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
        </div>

        {/* Academic Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Seat No. *</label>
            <input
              value={form.seatNo}
              onChange={(e) => updateField("seatNo", e.target.value)}
              placeholder="B23XXXX..."
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Enrollment No.</label>
            <input
              value={form.enrollmentNo}
              onChange={(e) => updateField("enrollmentNo", e.target.value)}
              placeholder="Enrollment #"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Program</label>
            <input
              value={form.program}
              onChange={(e) => updateField("program", e.target.value)}
              placeholder="Program (e.g., BS/MSC)"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
        </div>

        {/* Semester, Contact & CNIC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Semester *</label>
            <input
              value={form.semester}
              onChange={(e) => updateField("semester", e.target.value)}
              placeholder="I / II / III ..."
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">Contact No.</label>
            <input
              value={form.contactNo}
              onChange={(e) => updateField("contactNo", e.target.value)}
              placeholder="03XX-XXXXXXX"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 print:text-black">CNIC</label>
            <input
              value={form.cnic}
              onChange={(e) => updateField("cnic", e.target.value)}
              placeholder="xxxxx-xxxxxxx-x"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-xs font-medium text-gray-700 print:text-black">Address</label>
          <textarea
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
            rows={3}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 print:border-black print:ring-0 print:outline-none"
          />
        </div>

        {/* Documents */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 print:text-black">
            Documents (tick those attached)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {documents.map((doc, i) => (
              <label
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer print:text-black"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-400 rounded focus:ring-2 focus:ring-indigo-400 print:border-black"
                />
                {doc}
              </label>
            ))}
          </div>
        </div>

        {/* Fee & Office Use */}
        <div className="grid gap-4 md:grid-cols-2 pt-4">
          <div className="border border-gray-300 p-3 rounded print:border-black">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 print:text-black">Fee Voucher / Payment</h3>
            Fee Voucher Attached: <span className="font-medium">_____</span>
            <div className="mt-2 text-xs text-gray-500 print:text-black">
              (University to verify fee clearance)
            </div>
          </div>
          <div className="border border-gray-300 p-3 rounded print:border-black">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 print:text-black">For Office Use Only</h3>
            <div className="space-y-2 text-sm print:text-black">
              <div>
                Department Approval:
                <div className="mt-1 w-20 h-8 border border-gray-600 inline-block mr-2 print:border-black"></div>
                Date _______
              </div>
              <div>
                University Approval:
                <div className="mt-1 w-20 h-8 border border-gray-600 inline-block mr-2 print:border-black"></div>
                Date _______
              </div>
            </div>
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="text-sm font-medium text-gray-700 print:text-black">Remarks</label>
          <textarea
            value={form.remarks}
            onChange={(e) => updateField("remarks", e.target.value)}
            rows={3}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 print:border-black"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Print
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Performa
          </button>
        </div>
      </form>
    </div>
  );
};

export default Performa;

