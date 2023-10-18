import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotesHome } from "./features/notes";
import { ProblemContainer } from "./features/Problem/ProblemContainer";
import { McqQuestionsSurface } from "./features/mcq/McqQuestionsSurface";
import { NavBar } from "./global/navbar";
import { Home } from "./features/home";
import { GlobalSnackBar } from "./components/snackbar/GlobalSnackBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={NotesHome} path={"/javascript-notes"} />
        {/* <Route Component={() => null} path="/home" /> */}
        {/* <Route
          Component={McqQuestionsSurface}
          path={"/mcq-question/:questionId"}
        /> */}
        {/* <Route Component={ProblemContainer} path="/problem/:problemId" /> */}
      </Routes>
      <GlobalSnackBar />
    </BrowserRouter>
  );
}

export default App;
