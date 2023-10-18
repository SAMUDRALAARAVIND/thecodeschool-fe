import "./index.scss";
import React from "react";

interface Props {
  size?: number;
  color?: string;
  thickness?: number;
  shade?: string;
}

export const Spinner: React.FC<Props> = ({
  size = 10,
  color = "blue",
  thickness = 2,
  shade = "#0000ff3e",
}) => {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        border: `${thickness}px solid ${shade ?? "blue"}`,
        borderLeft: `${thickness}px solid ${color}`,
      }}
    ></div>
  );
};
