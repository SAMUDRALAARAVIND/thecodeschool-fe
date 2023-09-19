import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotesHome } from "./features/notes";
import { ProblemContainer } from "./features/Problem/ProblemContainer";
import { McqQuestionsSurface } from "./features/mcq/McqQuestionsSurface";
import { NavBar } from "./global/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route Component={() => null} path="/home" />
        <Route
          Component={McqQuestionsSurface}
          path={"/mcq-question/:questionId"}
        />
        <Route Component={NotesHome} path={"/notes"} />
        <Route Component={ProblemContainer} path="/problem/:problemId" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
