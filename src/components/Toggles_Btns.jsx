import React from "react";

const Toggles_btn = ({ selectedTasks, Resolved }) => {
  return (
    <div className="md:w-80 bg-white rounded-md p-4 shadow">
      <h2 className="font-semibold mb-4">Task Status</h2>

      {selectedTasks.length === 0 && (
          <p className="text-gray-500">No tasks selected</p>
      )}

      {selectedTasks.map((task) => (
        <div
       key={task.id}
       className="mb-3 flex justify-between items-center border-b pb-2"
        >
          <p className="font-medium">{task.title}</p>
          <button
               onClick={() => Resolved(task.id)}
           className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toggles_btn;
