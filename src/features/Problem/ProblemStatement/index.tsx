import React from "react";
import "./index.scss";
import { ProblemStatementHeader } from "./ProblemStatementHeader";
import { ProblemDescription } from "./ProblemDescription";

export const ProblemStatement = () => {
  return (
    <div className="problem-statement-container">
      <ProblemStatementHeader />
      <ProblemDescription />
    </div>
  );
};
