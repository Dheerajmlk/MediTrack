import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import IllnessReminder from "./IllnessReminder";
import { useSelector } from "react-redux";
import axios from "axios";

const Dashboard = () => {
  const [reminders, setReminders] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`https://userdatabase-f1b05-default-rtdb.firebaseio.com/users/${user.id}/reminders.json`)
        .then((res) => {
          const data = res.data || {};
          const formatted = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
          setReminders(formatted);
        });
    }
  }, [user?.id]);

  const handleMarkAsTaken = (id) => {
    if (!user?.id) return;
    axios.patch(
      `https://userdatabase-f1b05-default-rtdb.firebaseio.com/users/${user.id}/reminders/${id}.json`,
      { status: "Taken" }
    ).then(() => {
      setReminders((prev) =>
        prev.map((reminder) =>
          reminder.id === id ? { ...reminder, status: "Taken" } : reminder
        )
      );
    });
  };

  const pendingReminders = reminders.filter((r) => r.status !== "Taken");
  const takenReminders = reminders.filter((r) => r.status === "Taken");

  return (
    <div className="dashboard">
      <section className="hero bg-gradient-to-r from-blue-100 to-yellow-100 flex items-center justify-center text-center py-20 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-900">
            Person-centered care is at the heart of everything we do.
          </h1>
          <p className="text-gray-600 mt-4">
            We are committed to guiding patients towards a healthier life
            through individualized, affirming care.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      <section className="services grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-8">
        {[
          { title: "Individualized Pharmacy Care", icon: "🏥" },
          { title: "Sexual Health", icon: "💙" },
          { title: "Onsite Pharmacy", icon: "💊" },
          { title: "Clinical Program Development", icon: "🛠" },
          { title: "Clinical Supervision & Education", icon: "🎓" },
          { title: "LGBTQ+ Care", icon: "🌈" }
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl">{service.icon}</span>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">Learn more about our services.</p>
            <button className="mt-4 text-blue-500">Learn More →</button>
          </div>
        ))}
      </section>
      <section className="py-10 px-8 bg-yellow-50 rounded-lg shadow-inner mt-6">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">Medication Reminders</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">Upcoming</h3>
            <ul className="space-y-3 text-yellow-900">
              {pendingReminders.map((reminder) => (
                <li
                  key={reminder.id}
                  className="flex items-center justify-between bg-yellow-100 p-4 rounded-md"
                >
                  <span>
                    {reminder.medication} - Take at {reminder.time}
                  </span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                    onClick={() => handleMarkAsTaken(reminder.id)}
                  >
                    Mark as Taken
                  </button>
                </li>
              ))}
              {pendingReminders.length === 0 && (
                <p className="text-gray-500">No upcoming reminders.</p>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Taken</h3>
            <ul className="space-y-3 text-green-900">
              {takenReminders.map((reminder) => (
                <li
                  key={reminder.id}
                  className="bg-green-50 border border-green-200 p-4 rounded-md"
                >
                  <span>
                    ✅ {reminder.medication} - Taken at {reminder.time}
                  </span>
                </li>
              ))}
              {takenReminders.length === 0 && (
                <p className="text-gray-500">No medications taken yet.</p>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <IllnessReminder setReminders={setReminders} />
        </div>
      </section>

      <section className="text-center py-16 bg-gray-50">
        <h3 className="text-2xl font-bold">Join the MediTrack Team</h3>
        <p className="text-gray-600 mt-2">
          We foster an inclusive community to improve healthcare services.
        </p>
        <a href="../Components/Contact.jsx" className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
          Contact Our Team
        </a>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 MediTrack. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
