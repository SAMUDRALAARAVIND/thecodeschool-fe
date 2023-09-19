import React from "react";
import "./mcq-question.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ObservableObject, ObservablePrimitive } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import { IAnswer, IMcqQuestion } from "../mcq-questions-model";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { ExpoTheme } from "../../../components/Editor/themes";
import { CodeSchoolEditor } from "../../../components/Editor";

interface Props {
  questionsList$?: ObservableObject<IMcqQuestion>[];
  activeQuestionIndex$: ObservablePrimitive<number>;
  answers$: ObservableObject<IAnswer[]>;
  answerQuestion: ({
    questionIndex,
    selectedOptionIndex,
  }: {
    questionIndex: number;
    selectedOptionIndex: number;
  }) => void;
}

export const McqQuestion: React.FC<Props> = observer(
  ({ questionsList$, activeQuestionIndex$, answers$, answerQuestion }) => {
    const questionsList = questionsList$?.get?.();
    const currentQuestionIndex = activeQuestionIndex$?.get?.();
    const currentQuestionAnswer =
      answers$?.[currentQuestionIndex]?.get?.()?.selectedOptionIndex;

    const currentQuestion = questionsList[currentQuestionIndex];

    const lineBreaks = currentQuestion.snippetCode.match(/(\r\n|\r|\n)/g);

    const editorHeight = Math.min(34 * lineBreaks?.length, 400);

    const clearInput = () => {
      answerQuestion({
        questionIndex: currentQuestionIndex,
        selectedOptionIndex: -1,
      });
    };

    return (
      <div className="root-mcq-question-container">
        <div className="question-container">
          <h3>{currentQuestion.title}</h3>
          <div className="score-container">
            <div className="question-number">{`Q : ${
              currentQuestionIndex + 1
            }`}</div>
            <div className="score">{`Score: ${currentQuestion.score}`}</div>
          </div>
        </div>
        <div>
          <p>{currentQuestion.description}</p>
          <CodeSchoolEditor
            theme={ExpoTheme}
            defaultCode={currentQuestion.snippetCode}
            editable={false}
            height={`${editorHeight}px`}
          />
        </div>
        <div className="options-container">
          <div className="header">
            <h3>Options</h3>
            <div onClick={clearInput} className="fr-aic g-10 clear-btn">
              <ClearAllIcon />
              <span>Clear Selection</span>
            </div>
          </div>
          {currentQuestion.options.map((option, index) => {
            const isSelected = currentQuestionAnswer === index;

            return (
              <div
                className={`option ${isSelected ? "active-option" : ""}`}
                key={index}
                onClick={() =>
                  answerQuestion({
                    questionIndex: currentQuestionIndex,
                    selectedOptionIndex: index,
                  })
                }
              >
                <span>{option}</span>
                {isSelected && (
                  <CheckCircleIcon
                    style={{ color: "white", border: "1px solid #10243e" }}
                    fontSize="medium"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
