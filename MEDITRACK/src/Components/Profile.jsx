import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Auth";
import "../styles/Profile.css"; 

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">User Profile</h2>

      <div className="mb-4">
        <label className="font-semibold text-gray-700">Username:</label>
        <p className="text-gray-900">User</p> {/* You can replace this with a real name if added */}
      </div>

      <div className="mb-6">
        <label className="font-semibold text-gray-700">Email:</label>
        <p className="text-gray-900">{user?.email || "Not available"}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
