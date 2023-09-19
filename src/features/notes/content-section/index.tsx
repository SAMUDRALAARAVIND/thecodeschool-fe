import { ObservablePrimitive, observe } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import React, { useEffect } from "react";
import { TopicsList } from "../notes-model";

interface Props {
  activeTopicIndex$: ObservablePrimitive<number>;
  activeSubTopicIndex$: ObservablePrimitive<number>;
}

export const ContentSection: React.FC<Props> = observer(
  ({ activeSubTopicIndex$, activeTopicIndex$ }) => {
    const activeTopicIndex = activeTopicIndex$.get();
    const Component = TopicsList[activeTopicIndex].Component;

    useEffect(() => {
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
  }
);
