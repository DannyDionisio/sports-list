import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SportsList } from "./pages/SportsList";
import { SportDetail } from "./components/SportDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SportsList />} />
        <Route path="/:id" element={<SportDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
