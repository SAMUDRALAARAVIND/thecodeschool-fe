import { TopicsList } from "../notes-model";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ISubTopicState } from "../notes-model";

interface Props {
  updateContentSection: (state: ISubTopicState) => void;
}

export const TopicsSection: React.FC<Props> = ({ updateContentSection }) => {
  const [topicsState, setTopicsState] = useState<{ isOpen: boolean }[]>(() => {
    return TopicsList.map((_, index) => ({
      isOpen: index === 0,
    }));
  });

  const [activeSubTopicIndex, setActiveSubTopicIndex] =
    useState<ISubTopicState>({
      topicIndex: 0,
      subTopicIndex: 0,
    });

  const toggleTopic = (topicIndex) => {
    const isOpen = topicsState[topicIndex].isOpen;
    let newState = [...topicsState];
    newState[topicIndex] = { isOpen: !isOpen };

    setTopicsState(newState);
  };

  const updateSubTopicState = (state: ISubTopicState) => {
    setActiveSubTopicIndex(state);
    updateContentSection(state);
  };

  return (
    <>
      {TopicsList.map((topic, index) => {
        const isActive = topicsState[index].isOpen;

        return (
          <div className={`list-item ${isActive ? "active" : ""}`} key={index}>
            <button
              className="title-container fr-aic"
              onClick={() => toggleTopic(index)}
            >
              {isActive ? (
                <KeyboardArrowDownIcon
                  fontSize="large"
                  style={{ color: "#4388cf" }}
                />
              ) : (
                <ChevronRightIcon fontSize="large" />
              )}
              <span className="title fr">{topic.topicName}</span>
            </button>
            {isActive && (
              <div className="sub-topics-list">
                {TopicsList[index].subTopicsList.map((item, i) => {
                  const isActiveSubTopic =
                    activeSubTopicIndex.topicIndex === index &&
                    activeSubTopicIndex.subTopicIndex === i;

                  return (
                    <a
                      key={i}
                      href={`#${item.id}`}
                      className={isActiveSubTopic ? "active-sub-topic" : ""}
                      onClick={() =>
                        updateSubTopicState({
                          subTopicIndex: i,
                          topicIndex: index,
                        })
                      }
                    >
                      {item.subTopicName}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
