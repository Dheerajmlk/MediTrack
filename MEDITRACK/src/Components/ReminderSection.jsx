import React from "react";

const ReminderSection = ({ reminders, onMarkAsTaken }) => {
  const taken = {};
  const pending = {};

  Object.entries(reminders || {}).forEach(([id, reminder]) => {
    if (reminder.status === "Taken") {
      taken[id] = reminder;
    } else {
      pending[id] = reminder;
    }
  });

  return (
    <div className="grid md:grid-cols-2 gap-6 px-6 py-6">
      <section>
        <h2 className="text-xl font-bold text-blue-800 mb-2">Upcoming Reminders</h2>
        {Object.keys(pending).length === 0 ? (
          <p className="text-gray-500">No pending reminders.</p>
        ) : (
          Object.entries(pending).map(([id, reminder]) => (
            <div key={id} className="bg-white p-4 rounded shadow mb-3">
              <h3 className="font-semibold">{reminder.medication}</h3>
              <p>Time: {reminder.time}</p>
              <button
                onClick={() => onMarkAsTaken(id)}
                className="mt-2 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Mark as Taken
              </button>
            </div>
          ))
        )}
      </section>
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-2">Taken Medications</h2>
        {Object.keys(taken).length === 0 ? (
          <p className="text-gray-400">No medications marked as taken yet.</p>
        ) : (
          Object.entries(taken).map(([id, reminder]) => (
            <div key={id} className="bg-green-50 border border-green-200 p-4 rounded mb-3">
              <h3 className="font-semibold text-green-800">{reminder.medication}</h3>
              <p className="text-sm text-green-600">Taken at: {reminder.time}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ReminderSection;
