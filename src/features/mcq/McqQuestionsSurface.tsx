import React, { useEffect, useRef } from "react";
import { createMcqQuestionsModel } from "./mcq-questions-model";
import "./mcq-questions-surface.scss";

import { McqQuestion } from "./components/McqQuestion";
import { McqQuestionsList } from "./components/McqQuestionsList";
import { LSReloadingWrapper } from "../../components/loading-wrapper";

export const McqQuestionsSurface = () => {
  const mcqQuestionsModel = useRef(createMcqQuestionsModel()).current;

  const fetchMcqQuestions = () => {
    mcqQuestionsModel.actions.fetchMcqQuestions();
  };

  const onClickQuestionCard = (index: number) => {
    mcqQuestionsModel.actions.changeActiveQuestion(index);
  };

  const answerQuestion = (details: {
    questionIndex: number;
    selectedOptionIndex: number;
  }) => {
    mcqQuestionsModel.actions.answerQuestion(details);
  };

  useEffect(() => {
    fetchMcqQuestions();
  }, []);

  return (
    <div className="mcq-questions-surface-container">
      <LSReloadingWrapper
        isLoading$={mcqQuestionsModel.obs_views.isLoading}
        isError$={mcqQuestionsModel.obs_views.isError}
        onReload={fetchMcqQuestions}
      >
        <div className="mcq-questions-wrapper">
          <div className="question-container">
            <McqQuestion
              questionsList$={mcqQuestionsModel.obs?.data?.result}
              activeQuestionIndex$={mcqQuestionsModel.activeQuestionIndex}
              answers$={mcqQuestionsModel.obs_answers}
              answerQuestion={answerQuestion}
            />
          </div>
          <div className="list-container">
            <McqQuestionsList
              questionsList$={mcqQuestionsModel.obs?.data?.result}
              activeQuestionIndex$={mcqQuestionsModel.activeQuestionIndex}
              onClickQuestionCard={onClickQuestionCard}
            />
          </div>
        </div>
      </LSReloadingWrapper>
    </div>
  );
};
