import React from "react";
import "./index.scss";
import { EditorContainer } from "../EditorContainer";
import { ProblemStatement } from "../ProblemStatement";

export const ProblemContainer = () => {
  return (
    <div className="root-problem-container">
      <div className="problem-statement-container item">
        <ProblemStatement />
      </div>
      <div className="editor-container item">
        <EditorContainer />
      </div>
      <div className="options-container item"></div>
    </div>
  );
};
