import React from "react";
import "./index.scss";
import { CodeSchoolEditor } from "../../../components/Editor";
import ReplayIcon from "@mui/icons-material/Replay";

export const EditorContainer = () => {
  return (
    <div className="root-editor-container">
      <div className="header">
        <div className="left-options">
          <select className="language-picker">
            <option value="java">Java</option>
            <option value="javascript">javascript</option>
          </select>
        </div>
        <div className="right-options scale-transition">
          <ReplayIcon className="icon" fontSize="large" />
        </div>
      </div>
      <div className="editor-wrapper">
        <CodeSchoolEditor
          // Height of the editor is tightly coupled with the ProblemContainer Component.
          height={"73vh"}
          defaultCode="console.log('Well Done!')"
        />
      </div>
    </div>
  );
};
