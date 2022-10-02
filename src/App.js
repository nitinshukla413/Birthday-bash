import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import EventPage from "./screens/EventPage";
import CreateEvent from "./screens/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/create" element={<CreateEvent />}></Route>
        <Route exact path="/event" element={<EventPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
