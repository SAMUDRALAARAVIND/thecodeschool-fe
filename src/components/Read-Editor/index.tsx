import React from "react";
import { CodeSchoolEditor } from "../Editor";
import { GitHubDark, ExpoTheme, PlayCode } from "../Editor/themes";

interface Props {
  value: string;
  height?: string;
}

export const ReadEditor: React.FC<Props> = ({ value, height }) => {
  return (
    <CodeSchoolEditor
      defaultCode={value}
      theme={PlayCode}
      editable={false}
      hideLineNumbers={true}
      height={height}
    />
  );
};
