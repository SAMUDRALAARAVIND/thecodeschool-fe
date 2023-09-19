import React, { useState } from "react";

interface ITab {
  tabName: string;
  identifier: string;
}

export const ProblemHeaderTabs: ITab[] = [
  {
    tabName: "Description",
    identifier: "DESCRIPTION",
  },
  {
    tabName: "Submissions",
    identifier: "SUBMISSIONS",
  },
];

export const ProblemStatementHeader = () => {
  const [tab, setTab] = useState(ProblemHeaderTabs[0]);

  const changeTab = (tab: ITab) => {
    setTab(tab);
  };

  return (
    <div className="header-tabs">
      {ProblemHeaderTabs.map((headerTab) => {
        const isActiveTab = headerTab.identifier === tab.identifier;

        return (
          <div
            key={headerTab.identifier}
            className={`tab ${isActiveTab ? "active-tab" : ""}`}
            onClick={() => changeTab(headerTab)}
          >
            {headerTab.tabName}
          </div>
        );
      })}
    </div>
  );
};
