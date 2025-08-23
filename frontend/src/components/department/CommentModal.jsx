// import React, { useState } from "react";

// const CommentModal = ({ isOpen, onClose, onSave }) => {
//   const [comment, setComment] = useState("");

//   if (!isOpen) return null;

//   const handleSave = () => {
//     if (comment.trim() === "") {
//       alert("Please enter a comment before saving.");
//       return;
//     }
//     onSave(comment);
//     setComment("");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Add Comment / Instruction</h2>
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Enter your comment here..."
//           className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-500"
//           rows="4"
//         />
//         <div className="flex justify-end gap-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentModal;
import React, { useState } from "react";

const CommentModal = ({ isOpen, onClose, onSave }) => {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!comment.trim()) {
      alert("Please enter a comment before saving.");
      return;
    }
    onSave(comment);
    setComment("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add Comment / Instruction</h2>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment here..."
          className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-500"
          rows="4"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
