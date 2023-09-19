import { ObservablePrimitive } from "@legendapp/state";
import { ReactNode } from "react";
import { observer } from "@legendapp/state/react";
import React from "react";
import "./lsreload-wrapper.scss";

interface Props {
  isLoading$: ObservablePrimitive<boolean>;
  isError$: ObservablePrimitive<boolean>;
  error$?: ObservablePrimitive<string>;
  children: ReactNode;
  onReload: () => void;
}

interface ReloadProps {
  errorMessage: string;
  onClick: () => void;
}

const Reload: React.FC<ReloadProps> = ({ errorMessage, onClick }) => {
  return (
    <div className="reload-container">
      <b className="error-message">{errorMessage}</b>
      <button onClick={onClick} className="reload-btn">
        Reload
      </button>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export const LSReloadingWrapper: React.FC<Props> = observer(
  ({ isLoading$, isError$, error$, children, onReload }) => {
    if (isLoading$.get()) {
      return <Loader />;
    }

    if (isError$.get()) {
      const errorMessage = error$?.get() ?? "Something went wrong";
      return <Reload onClick={onReload} errorMessage={errorMessage} />;
    }

    return <>{children}</>;
  }
);
