import React from "react";

const TaskStatus = ({ tasks, completeTask }) => {
  return (
      <div className="md:w-80 bg-white rounded-md p-4 shadow">
         <h2 className="font-semibold mb-4">Task Status</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks selected</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
        className="mb-3 flex justify-between items-center border-b pb-3"
          >
            <p className="font-medium">{task.title}</p>
              <button
            onClick={() => completeTask(task.id)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
