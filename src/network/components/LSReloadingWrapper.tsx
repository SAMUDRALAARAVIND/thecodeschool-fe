import React from "react";
import { observer } from "@legendapp/state/react";
import { ObservableComputed } from "@legendapp/state";
import { IApiStatusViews } from "../request";
import "./ls-reloading-wrapper.scss";

interface Props {
  children: any;
  apiStatusViews$: ObservableComputed<IApiStatusViews>;
  onReload: () => void;
}

export const LSReloadingWrapper: React.FC<Props> = observer(
  ({ children, apiStatusViews$, onReload }) => {
    const apiStatus = apiStatusViews$.get();

    if (apiStatus.isLoading) {
      return (
        <div className="loading-container">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
        </div>
      );
    }

    if (apiStatus.isError) {
      return <button onClick={onReload}>OnReload</button>;
    }

    return <>{children}</>;
  }
);
