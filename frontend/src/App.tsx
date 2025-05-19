import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const PrivateRoute = ({ element }: { element: ReactElement }) => {
    return token ? element : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<>Home Page</>} />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<>Page not found!</>} />
    </Routes>
  );
}

export default App;
