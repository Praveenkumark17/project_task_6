import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/signup";
import Signin from "./Components/SignIn/signin";
import Dashboard from "./Components/Dashboard/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
