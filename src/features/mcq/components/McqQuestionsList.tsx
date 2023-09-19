import { ObservableObject, ObservablePrimitive } from "@legendapp/state";
import React from "react";
import { IMcqQuestion } from "../mcq-questions-model";
import { observer } from "@legendapp/state/react";
import "./questions-list.scss";

interface Props {
  questionsList$?: ObservableObject<IMcqQuestion>[];
  activeQuestionIndex$: ObservablePrimitive<number>;
  onClickQuestionCard: (index: number) => void;
}

export const McqQuestionsList: React.FC<Props> = observer(
  ({ questionsList$, activeQuestionIndex$, onClickQuestionCard }) => {
    const questions = questionsList$?.get?.();
    const activeQuestionIndex = activeQuestionIndex$.get();

    return (
      <div className="mcq-questions-list-container">
        {questions?.map?.((question, index) => {
          const isActive = index === activeQuestionIndex;
          return (
            <div
              key={index}
              className={`question-card ${isActive ? "active-card" : ""}`}
              onClick={() => onClickQuestionCard(index)}
            >
              <span className="sno">{index + 1}</span>
              <span>{question.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
