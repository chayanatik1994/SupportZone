import React from "react";

const ResolvedTasks = ({ tasks }) => {
      return (
    <div className="md:w-80 bg-white rounded-md p-4 shadow mt-6">
    <h2 className="font-semibold mb-4">Resolved Tasks</h2>
         {tasks.length === 0 ? (
        <p className="text-gray-500">No resolved tasks</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
        className="mb-3 border-b pb-2 text-sm text-green-800"
          >
            <p className="font-medium text-green-900">{task.title}</p>
               <p className="text-xs">
              {task.customer} | {task.createdAt}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTasks;
