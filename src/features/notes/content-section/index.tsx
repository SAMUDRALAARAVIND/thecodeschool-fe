import { observe } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import React, { useContext, useEffect } from "react";
import { TopicsList } from "../notes-model";
import { NotesContext } from "..";

export const ContentSection = observer(() => {
  const notesModel = useContext(NotesContext);
  const activeTopicIndex = notesModel.obs.topicIndex.get();
  const Component = TopicsList[activeTopicIndex].Component;

  useEffect(() => {
    const activeSubTopicIndex$ = notesModel.obs.subTopicIndex;
    const subTopicMutationListener = observe(activeSubTopicIndex$, () => {
      let activeSubTopicIndex = activeSubTopicIndex$.peek();
      // TODO: change the scroll position accordingly
    });

    return () => {
      subTopicMutationListener?.();
    };
  }, []);

  return (
    <>
      <Component />
    </>
  );
});
