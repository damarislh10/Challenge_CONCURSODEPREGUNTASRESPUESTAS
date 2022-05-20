import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormUser } from "../Components/FormUser";
import HistoryPlay from "../Components/HistoryPlay";
import { Questions } from "../Components/Questions";
import StartPlay from "../Components/StartPlay";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartPlay />} />
          <Route path="/user" element={<FormUser />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/history" element={<HistoryPlay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
