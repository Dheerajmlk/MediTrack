import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Store from "./Redux/Store";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import MainLayout from "./Components/MainLayout";
import IllnessReminder from "./Components/IllnessReminder";

const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/*" element={<PrivateRoute element={<MainLayout />} />} />
          <Route path="/add-reminder" element={<PrivateRoute element={<IllnessReminder />} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
