import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoryPlay from "../Components/UserPlayer/HistoryPlay";
import { Questions } from "../Components/MainPlay/Questions";
import StartPlay from "../Components/Home/StartPlay";
import { FormUser } from "../Components/UserPlayer/FormUser";

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
