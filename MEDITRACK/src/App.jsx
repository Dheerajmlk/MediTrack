import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./Redux/Store";
import Signin from "./Components/Signin";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";


const PrivateRoute = ({ element }) => {
  const user = useSelector((state) => state.user);
  return user ? element : <Navigate to="/auth" />;
};


const HomeRedirect = () => {
  const user = useSelector((state) => state.user);
  return user ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRedirect />} /> 
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
