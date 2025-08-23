// // // import React, { useState, useRef } from "react";

// // // const faqs = [
// // //   {
// // //     question: "What is the UOK Digital Flow System?",
// // //     answer:
// // //       "It’s a centralized online portal for University of Karachi students to submit academic service requests, track their status in real time, and get faster approvals from departments and university admins.",
// // //     more:
// // //       "The system replaces outdated paper-based processes, reduces approval delays, and makes it easier for both students and staff to manage requests from anywhere with an internet connection.",
// // //   },
// // //   {
// // //     question: "How do I log in?",
// // //     answer:
// // //       "You must use your university-issued Student ID and password provided by the university.",
// // //     more:
// // //       "If you have not received login credentials, visit your department admin office. If you forgot your password, use the 'Forgot Password' option on the login page to reset it via your registered email.",
// // //   },
// // //   {
// // //     question: "What services can I request through the portal?",
// // //     answer:
// // //       "Any academic service that was previously processed via paper forms—such as transcript requests, enrollment letters, or course adjustments—can be submitted digitally.",
// // //     more:
// // //       "Available services may vary by department. New services can be added over time as the portal is expanded.",
// // //   },
// // //   {
// // //     question: "Can I track my request after submission?",
// // //     answer:
// // //       "Yes. The portal has a real-time tracking dashboard where you can see each approval stage.",
// // //     more:
// // //       "The dashboard shows whether your request is pending, approved, or rejected. You will also get notifications for every update.",
// // //   },
// // //   {
// // //     question: "What if my request is rejected?",
// // //     answer:
// // //       "You will receive a notification with the reason for rejection.",
// // //     more:
// // //       "Depending on the reason, you can update your request and resubmit it. For policy-related rejections, contact your department for clarification.",
// // //   },
// // //   {
// // //     question: "Is my data secure?",
// // //     answer:
// // //       "Yes. The system uses encrypted login, role-based access control, and audit logs to ensure security.",
// // //     more:
// // //       "All data is stored on secure university servers, and only authorized personnel can access it.",
// // //   },
// // //   {
// // //     question: "Can I use the portal on my phone?",
// // //     answer:
// // //       "Yes. The portal is web-based and works on most devices with internet access.",
// // //     more:
// // //       "For the best experience, use the latest version of Chrome, Firefox, or Edge.",
// // //   },
// // //   {
// // //     question: "Who should I contact for technical issues?",
// // //     answer:
// // //       "If you encounter issues, email the university IT helpdesk or use the 'Report a Problem' option in your dashboard.",
// // //     more:
// // //       "When reporting issues, include your Student ID, a description of the problem, and screenshots if possible.",
// // //   },
// // //   {
// // //     question: "Will the portal work offline?",
// // //     answer:
// // //       "No. Internet access is required to use the system.",
// // //     more:
// // //       "However, you can save drafts of some requests and submit them later when online.",
// // //   },
// // //   {
// // //     question: "How will I know when my request is approved?",
// // //     answer:
// // //       "You will receive a notification on the portal and, optionally, via email.",
// // //     more:
// // //       "The notification will include the date, approval stage, and any additional instructions.",
// // //   },
// // // ];

// // // const Icon = ({ big }) => (
// // //   <svg
// // //     className={`text-blue-500 ${big ? "w-12 h-12" : "w-8 h-8"}`}
// // //     fill="none"
// // //     stroke="currentColor"
// // //     strokeWidth="2"
// // //     viewBox="0 0 24 24"
// // //   >
// // //     <path
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       d="M12 19l-7-7 7-7m0 0l7 7-7 7"
// // //     />
// // //   </svg>
// // // );

// // // export default function FAQPage() {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [expanded, setExpanded] = useState(null);
// // //   const faqsPerPage = 3;
// // //   const totalPages = Math.ceil(faqs.length / faqsPerPage);

// // //   const refs = useRef([]);

// // //   const startIndex = (currentPage - 1) * faqsPerPage;
// // //   const currentFaqs = faqs.slice(startIndex, startIndex + faqsPerPage);

// // //   const goNext = () => {
// // //     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
// // //     setExpanded(null);
// // //   };

// // //   const goPrev = () => {
// // //     setCurrentPage((prev) => Math.max(prev - 1, 1));
// // //     setExpanded(null);
// // //   };

// // //   const toggleExpand = (index) => {
// // //     if (expanded === index) {
// // //       setExpanded(null);
// // //     } else {
// // //       setExpanded(index);
// // //       setTimeout(() => {
// // //         refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
// // //       }, 100);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="max-w-7xl mx-auto p-6"
// // //       style={{
// // //         minHeight: "100vh", // allow content to grow
// // //         overflow: "visible", // don't hide content
// // //         margin: 0,
// // //         padding: 0,
// // //         boxSizing: "border-box",
// // //       }}
// // //     >
// // //       <h1 className="text-3xl font-bold text-center mb-2">FAQ</h1>
// // //       <div className="flex justify-center space-x-1 mb-8">
// // //         <div className="w-10 h-1 rounded-full bg-blue-300"></div>
// // //         <div className="w-10 h-1 rounded-full bg-blue-500"></div>
// // //         <div className="w-10 h-1 rounded-full bg-blue-300"></div>
// // //       </div>
// // //       <p className="text-center text-gray-500 mb-12">
// // //         Here are some frequently asked questions about the UOK Digital Flow System
// // //       </p>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
// // //         {currentFaqs.map((faq, idx) => {
// // //           const globalIndex = startIndex + idx;
// // //           return (
// // //             <div
// // //               key={globalIndex}
// // //               ref={(el) => (refs.current[globalIndex] = el)}
// // //               className="flex space-x-6 border-l-2 border-red-300 pl-6"
// // //             >
// // //               <div className="flex-shrink-0 flex items-start">
// // //                 {globalIndex === faqs.length - 1 ? (
// // //                   <div className="rounded-full bg-red-400 p-3">
// // //                     <Icon big />
// // //                   </div>
// // //                 ) : (
// // //                   <Icon />
// // //                 )}
// // //               </div>
// // //               <div>
// // //                 <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
// // //                 <p className="text-gray-600 mb-2">{faq.answer}</p>
// // //                 <button
// // //                   onClick={() => toggleExpand(globalIndex)}
// // //                   className="text-blue-600 font-semibold text-sm hover:underline"
// // //                 >
// // //                   {expanded === globalIndex ? "SHOW LESS" : "READ MORE"}
// // //                 </button>
// // //                 {expanded === globalIndex && (
// // //                   <p className="mt-2 text-gray-500">{faq.more}</p>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* Pagination Controls */}
// // //       <div className="flex justify-center space-x-4">
// // //         <button
// // //           onClick={goPrev}
// // //           disabled={currentPage === 1}
// // //           className={`px-4 py-2 rounded ${
// // //             currentPage === 1
// // //               ? "bg-gray-300 cursor-not-allowed"
// // //               : "bg-blue-500 text-white hover:bg-blue-600"
// // //           }`}
// // //         >
// // //           Previous
// // //         </button>
// // //         <span className="self-center">
// // //           Page {currentPage} of {totalPages}
// // //         </span>
// // //         <button
// // //           onClick={goNext}
// // //           disabled={currentPage === totalPages}
// // //           className={`px-4 py-2 rounded ${
// // //             currentPage === totalPages
// // //               ? "bg-gray-300 cursor-not-allowed"
// // //               : "bg-blue-500 text-white hover:bg-blue-600"
// // //           }`}
// // //         >
// // //           Next
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronDown, ChevronUp, Search } from "lucide-react";

// // const faqs = [
// //   {
// //     question: "What is the UOK Digital Flow System?",
// //     answer:
// //       "It’s a centralized online portal for University of Karachi students to submit academic service requests, track their status in real time, and get faster approvals from departments and university admins.",
// //     more:
// //       "The system replaces outdated paper-based processes, reduces approval delays, and makes it easier for both students and staff to manage requests from anywhere with an internet connection.",
// //   },
// //   {
// //     question: "How do I log in?",
// //     answer:
// //       "You must use your university-issued Student ID and password provided by the university.",
// //     more:
// //       "If you have not received login credentials, visit your department admin office. If you forgot your password, use the 'Forgot Password' option on the login page to reset it via your registered email.",
// //   },
// //   {
// //     question: "Can I track my request after submission?",
// //     answer:
// //       "Yes. The portal has a real-time tracking dashboard where you can see each approval stage.",
// //     more:
// //       "The dashboard shows whether your request is pending, approved, or rejected. You will also get notifications for every update.",
// //   },
// //   {
// //     question: "Is my data secure?",
// //     answer:
// //       "Yes. The system uses encrypted login, role-based access control, and audit logs to ensure security.",
// //     more:
// //       "All data is stored on secure university servers, and only authorized personnel can access it.",
// //   },
// //   {
// //     question: "Who should I contact for technical issues?",
// //     answer:
// //       "If you encounter issues, email the university IT helpdesk or use the 'Report a Problem' option in your dashboard.",
// //     more:
// //       "When reporting issues, include your Student ID, a description of the problem, and screenshots if possible.",
// //   },
// // ];

// // export default function FAQHelp() {
// //   const [expanded, setExpanded] = useState(null);
// //   const [query, setQuery] = useState("");

// //   const toggleExpand = (index) => {
// //     setExpanded(expanded === index ? null : index);
// //   };

// //   // ✅ Filter FAQs based on search query
// //   const filteredFaqs = faqs.filter((faq) =>
// //     faq.question.toLowerCase().includes(query.toLowerCase())
// //   );

// //   return (
// //     <div className="max-w-6xl mx-auto px-6 py-12">
// //       <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
// //         ❓ Frequently Asked Questions
// //       </h1>
// //       <p className="text-center text-gray-500 mb-8">
// //         Find quick answers about the UOK Digital Flow System
// //       </p>

// //       {/* 🔍 Search Bar */}
// //       <div className="relative max-w-lg mx-auto mb-12">
// //         <input
// //           type="text"
// //           placeholder="Search your question..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           className="w-full px-4 py-3 pl-12 border rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //         />
// //         <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
// //       </div>

// //       {/* FAQ List */}
// //       {filteredFaqs.length > 0 ? (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {filteredFaqs.map((faq, index) => (
// //             <motion.div
// //               key={index}
// //               layout
// //               className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
// //             >
// //               <button
// //                 onClick={() => toggleExpand(index)}
// //                 className="flex justify-between items-center w-full text-left"
// //               >
// //                 <span className="font-semibold text-gray-800 text-lg">
// //                   {faq.question}
// //                 </span>
// //                 {expanded === index ? (
// //                   <ChevronUp className="text-blue-600" />
// //                 ) : (
// //                   <ChevronDown className="text-gray-500" />
// //                 )}
// //               </button>

// //               <AnimatePresence>
// //                 {expanded === index && (
// //                   <motion.div
// //                     initial={{ opacity: 0, height: 0 }}
// //                     animate={{ opacity: 1, height: "auto" }}
// //                     exit={{ opacity: 0, height: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="mt-3 text-gray-600 text-sm leading-relaxed"
// //                   >
// //                     <p>{faq.answer}</p>
// //                     <p className="mt-2 text-gray-500">{faq.more}</p>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-center text-gray-500 mt-12">
// //           No results found for "<span className="font-medium">{query}</span>"
// //         </p>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // ✅ navigate ke liye

// const faqs = [
//   {
//     question: "What is the UOK Digital Flow System?",
//     answer:
//       "It’s a centralized online portal for University of Karachi students to submit academic service requests, track their status in real time, and get faster approvals from departments and university admins.",
//     more:
//       "The system replaces outdated paper-based processes, reduces approval delays, and makes it easier for both students and staff to manage requests from anywhere with an internet connection.",
//   },
//   {
//     question: "How do I log in?",
//     answer:
//       "You must use your university-issued Student ID and password provided by the university.",
//     more:
//       "If you have not received login credentials, visit your department admin office. If you forgot your password, use the 'Forgot Password' option on the login page to reset it via your registered email.",
//   },
//   {
//     question: "Can I track my request after submission?",
//     answer:
//       "Yes. The portal has a real-time tracking dashboard where you can see each approval stage.",
//     more:
//       "The dashboard shows whether your request is pending, approved, or rejected. You will also get notifications for every update.",
//   },
//   {
//     question: "Is my data secure?",
//     answer:
//       "Yes. The system uses encrypted login, role-based access control, and audit logs to ensure security.",
//     more:
//       "All data is stored on secure university servers, and only authorized personnel can access it.",
//   },
//   {
//     question: "Who should I contact for technical issues?",
//     answer:
//       "If you encounter issues, email the university IT helpdesk or use the 'Report a Problem' option in your dashboard.",
//     more:
//       "When reporting issues, include your Student ID, a description of the problem, and screenshots if possible.",
//   },
// ];

// export default function FAQHelp() {
//   const [expanded, setExpanded] = useState(null);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   // ✅ Filter FAQs based on search query
//   const filteredFaqs = faqs.filter((faq) =>
//     faq.question.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="font-sans min-h-screen bg-white">
//       {/* ✅ Header (same as Notification.js style) */}
//       <div className="flex justify-between items-center p-6 border-b shadow-sm bg-green-50">
//         <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
//           ❓ FAQ & Help
//         </h1>
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//         >
//           ← Dashboard
//         </button>
//       </div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <p className="text-center text-gray-500 mb-8">
//           Find quick answers about the UOK Digital Flow System
//         </p>

//         {/* 🔍 Search Bar */}
//         <div className="relative max-w-lg mx-auto mb-12">
//           <input
//             type="text"
//             placeholder="Search your question..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full px-4 py-3 pl-12 border rounded-2xl shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
//           />
//           <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
//         </div>

//         {/* FAQ List */}
//         {filteredFaqs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {filteredFaqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 layout
//                 className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
//               >
//                 <button
//                   onClick={() => toggleExpand(index)}
//                   className="flex justify-between items-center w-full text-left"
//                 >
//                   <span className="font-semibold text-gray-800 text-lg">
//                     {faq.question}
//                   </span>
//                   {expanded === index ? (
//                     <ChevronUp className="text-green-600" />
//                   ) : (
//                     <ChevronDown className="text-gray-500" />
//                   )}
//                 </button>

//                 <AnimatePresence>
//                   {expanded === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-3 text-gray-600 text-sm leading-relaxed"
//                     >
//                       <p>{faq.answer}</p>
//                       <p className="mt-2 text-gray-500">{faq.more}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-12">
//             No results found for "<span className="font-medium">{query}</span>"
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "What is the UOK Digital Flow System?",
    answer:
      "It’s a centralized online portal for University of Karachi students to submit academic service requests, track their status in real time, and get faster approvals from departments and university admins.",
    more:
      "The system replaces outdated paper-based processes, reduces approval delays, and makes it easier for both students and staff to manage requests from anywhere with an internet connection.",
  },
  {
    id: 2,
    question: "How do I log in?",
    answer:
      "You must use your university-issued Student ID and password provided by the university.",
    more:
      "If you have not received login credentials, visit your department admin office. If you forgot your password, use the 'Forgot Password' option on the login page to reset it via your registered email.",
  },
  {
    id: 3,
    question: "Can I track my request after submission?",
    answer:
      "Yes. The portal has a real-time tracking dashboard where you can see each approval stage.",
    more:
      "The dashboard shows whether your request is pending, approved, or rejected. You will also get notifications for every update.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Yes. The system uses encrypted login, role-based access control, and audit logs to ensure security.",
    more:
      "All data is stored on secure university servers, and only authorized personnel can access it.",
  },
  {
    id: 5,
    question: "Who should I contact for technical issues?",
    answer:
      "If you encounter issues, email the university IT helpdesk or use the 'Report a Problem' option in your dashboard.",
    more:
      "When reporting issues, include your Student ID, a description of the problem, and screenshots if possible.",
  },
];

export default function FAQHelp() {
  const [expandedId, setExpandedId] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* ✅ Header */}
      <div className="flex justify-between items-center p-6 border-b shadow-sm bg-green-50">
        <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          ❓ FAQ & Help
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          ← Dashboard
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-gray-500 mb-8">
          Find quick answers about the UOK Digital Flow System
        </p>

        {/* 🔍 Search Bar */}
        <div className="relative max-w-lg mx-auto mb-12">
          <input
            type="text"
            placeholder="Search your question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border rounded-2xl shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        </div>

        {/* FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </span>
                  {expandedId === faq.id ? (
                    <ChevronUp className="text-green-600" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                        <p>{faq.answer}</p>
                        <p className="mt-2 text-gray-500">{faq.more}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">
            No results found for "<span className="font-medium">{query}</span>"
          </p>
        )}
      </div>
    </div>
  );
}
