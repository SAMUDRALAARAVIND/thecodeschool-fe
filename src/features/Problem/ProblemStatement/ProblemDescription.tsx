import React from "react";

import "./problem-description.scss";
import { mockQuestion } from "../../../question";

export const ProblemDescription = () => {
  return (
    <div className="problem-description-container">
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: mockQuestion.description }}
      />
      <div className="examples">
        {mockQuestion.examples?.map?.((example, index) => {
          return (
            <div className="example">
              <h3>{`Example ${index + 1} :`}</h3>
              <div className="well">
                <div>
                  <b>Input :</b>
                  <span dangerouslySetInnerHTML={{ __html: example.input }} />
                </div>
                <div>
                  <b>Output :</b>
                  <span dangerouslySetInnerHTML={{ __html: example.output }} />
                </div>
                <div>
                  <b>Explanation :</b>
                  <span
                    dangerouslySetInnerHTML={{ __html: example.explanation }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="constraints">
        <h3>Constraints</h3>
        <ul>
          {mockQuestion.constraints?.map((constraint, index) => {
            return <li dangerouslySetInnerHTML={{ __html: constraint }} />;
          })}
        </ul>
      </div>
      {mockQuestion.followup && (
        <div>
          <h3>Followup:</h3>
          <div dangerouslySetInnerHTML={{ __html: mockQuestion.followup }} />
        </div>
      )}
    </div>
  );
};
