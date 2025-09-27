import React from "react";

const IssuesManagement = ({ tickets, addToInProgress }) => {
  return (
    <div className="flex-1 px-6 lg:px-20">
        <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>

      {tickets.length === 0 ? (
        <p className="text-gray-500">No tickets available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.slice(0, 10).map((ticket) => (
            <div
              key={ticket.id}
                 onClick={() => addToInProgress(ticket)}
              className="p-4 bg-gray-100 rounded shadow cursor-pointer"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{ticket.title}</h3>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      ticket.status === "Open"
                         ? "bg-green-100 text-green-700"
                      : ticket.status === "In-Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span>#{ticket.id}</span>
                  <span className="text-red-600 font-semibold">{ticket.priority}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{ticket.customer}</span>
                  <span>|</span>
                  <span>{ticket.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IssuesManagement;
