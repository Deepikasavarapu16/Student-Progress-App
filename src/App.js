import Home from "./pages/HomePage/Home";
import StudnetDashboard from "./pages/StudentDashboard/StudnetDashboard";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/StudentDashboard/:registeredId"
          element={<StudnetDashboard />}
        />
      </Routes>
      {/* <Home />; */}
    </Routers>
  );
}

export default App;
