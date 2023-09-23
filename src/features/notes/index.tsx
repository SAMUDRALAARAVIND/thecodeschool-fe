import React, { useRef, createContext } from "react";

import "./index.scss";
import { TopicsSection } from "./topics-section";
import { ContentSection } from "./content-section";
import { ISubTopicState, NotesModel, createNotesModel } from "./notes-model";

//@ts-ignore
// We don't need a default value for this context.
export const NotesContext = createContext<NotesModel>();

export const NotesHome = () => {
  const notesModel = useRef(createNotesModel()).current;

  const updateContentSection = (state: ISubTopicState) => {
    notesModel.actions.updateActiveTopicSection(state);
  };

  return (
    <NotesContext.Provider value={notesModel}>
      <div className="root-notes-container">
        <div className="topics-container">
          <TopicsSection updateContentSection={updateContentSection} />
        </div>
        <div className="content-container">
          <ContentSection />
        </div>
      </div>
    </NotesContext.Provider>
  );
};
