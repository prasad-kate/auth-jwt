import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <Routes>
      <Route path="*" element={<>Page not found!</>} />
      <Route path="/" element={<>Home Page</>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
