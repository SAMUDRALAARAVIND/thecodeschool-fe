import React, { useRef } from "react";

import "./index.scss";
import { TopicsSection } from "./topics-section";
import { ContentSection } from "./content-section";
import { ISubTopicState, createNotesModel } from "./notes-model";

export const NotesHome = () => {
  const notesModel = useRef(createNotesModel()).current;

  const updateContentSection = (state: ISubTopicState) => {
    notesModel.actions.updateActiveTopicSection(state);
  };

  return (
    <div className="root-notes-container">
      <div className="topics-container">
        <TopicsSection updateContentSection={updateContentSection} />
      </div>
      <div className="content-container">
        <ContentSection
          activeTopicIndex$={notesModel.obs.topicIndex}
          activeSubTopicIndex$={notesModel.obs.subTopicIndex}
        />
      </div>
    </div>
  );
};
