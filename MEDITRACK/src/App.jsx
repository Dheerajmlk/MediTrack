import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./Redux/Store";
import Signin from "./Components/Signin";
import Login from "./Components/Login"; // ✅ Use Login.jsx instead of Auth.jsx
import Dashboard from "./Components/Dashboard";

// Protect the dashboard (redirect to /login if not logged in)
const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* ✅ Replaced /auth with /login */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* ✅ Default redirect */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
