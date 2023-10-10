import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import "./editor.scss";
import React from "react";
import { firaCodeDark } from "./themes";

interface Props {
  defaultCode?: string;
  width?: string;
  height?: string;
  theme?: Extension;
  editable?: boolean;
  hideLineNumbers?: boolean;
}

export const CodeSchoolEditor: React.FC<Props> = ({
  defaultCode,
  width,
  height,
  theme,
  hideLineNumbers,
  ...props
}) => {
  const [fontSize, setFontSize] = useState(16);

  const onKeyDown = (e: any) => {
    if ((e.key === "=" || e.key === "+") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setFontSize((old) => old + 2);
    } else if ((e.key === "-" || e.key === "-") && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setFontSize((old) => old - 2);
    }
  };

  return (
    <CodeMirror
      value={defaultCode ?? "console.log('hello world!');"}
      height={height ?? "400px"}
      width={width ?? "100%"}
      extensions={[javascript({ jsx: true })]}
      onChange={() => {}}
      theme={theme ?? firaCodeDark}
      style={{
        fontSize,
        caretColor: "red",
      }}
      onKeyDown={onKeyDown}
      className={`editor-container ${
        hideLineNumbers ? "hide-line-numbers" : ""
      }`}
      {...props}
    />
  );
};
