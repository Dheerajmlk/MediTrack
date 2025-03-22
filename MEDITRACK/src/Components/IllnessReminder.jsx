import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import illnessData from "../assets/illness_medicine_data.json"; // Make sure your JSON is in this path

const IllnessReminder = () => {
  const user = useSelector((state) => state.auth.user);
  const [illness, setIllness] = useState("");
  const [medOptions, setMedOptions] = useState([]);
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Load medicines based on selected illness
  useEffect(() => {
    if (illness && illnessData[illness]) {
      setMedOptions(illnessData[illness]);
    } else {
      setMedOptions([]);
    }
  }, [illness]);

  const handleCheckboxChange = (medicine) => {
    setSelectedMeds((prev) =>
      prev.includes(medicine)
        ? prev.filter((m) => m !== medicine)
        : [...prev, medicine]
    );
  };

  const handleAddReminders = async () => {
    if (!user?.id || !selectedMeds.length || !time) return;
    setLoading(true);
    try {
      const promises = selectedMeds.map((med) =>
        axios.post(
          `https://userdatabase-f1b05-default-rtdb.firebaseio.com/users/${user.id}/reminders.json`,
          { medication: med, time, status: "Pending" }
        )
      );
      await Promise.all(promises);
      setSelectedMeds([]);
      setTime("");
      alert("Reminders added successfully");
    } catch (err) {
      console.error("Failed to add reminders:", err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Set Medication Reminder</h2>

      <label className="block mb-2 font-medium text-gray-700">Select Illness</label>
      <select
        value={illness}
        onChange={(e) => setIllness(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      >
        <option value="">-- Choose an illness --</option>
        {Object.keys(illnessData).map((ill) => (
          <option key={ill} value={ill}>{ill}</option>
        ))}
      </select>

      {medOptions.length > 0 && (
        <>
          <label className="block mb-2 font-medium text-gray-700">Select Medicines</label>
          <div className="mb-4 space-y-2">
            {medOptions.map((med) => (
              <label key={med} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedMeds.includes(med)}
                  onChange={() => handleCheckboxChange(med)}
                />
                {med}
              </label>
            ))}
          </div>
        </>
      )}

      <label className="block mb-2 font-medium text-gray-700">Reminder Time</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />

      <button
        onClick={handleAddReminders}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Saving..." : "Add Reminders"}
      </button>
    </div>
  );
};

export default IllnessReminder;
