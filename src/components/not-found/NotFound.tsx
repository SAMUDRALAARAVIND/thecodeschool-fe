import React from "react";

interface Props {
  title: string;
  subTitle: string;
}

export const NotFound: React.FC<Props> = ({ subTitle, title }) => {
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.title}>{title ?? "No Data Found"}</span>
        {subTitle && <span style={styles.subTitle}>{subTitle}</span>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: "14px",
    fontWeight: "400",
  },
};
