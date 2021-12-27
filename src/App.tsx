import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QuestionnairePage from "./pages/QuestionnairePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/questionnaires/:id" element={<QuestionnairePage />} />
      </Routes>
    </Router>
  );
}

export default App;
