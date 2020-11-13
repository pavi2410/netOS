import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles.css";

const TaskBar = () => (
  <div
    style={{
      height: "40px",
      width: "100%",
      backgroundColor: "#ffffff7f",
      position: "absolute",
      bottom: 0,
      display: "flex",
      alignItems: "center"
    }}
  >
    <FontAwesomeIcon
      icon={faWindows}
      size="lg"
      className="WindowsButton"
      style={{ padding: "0 16px", height: "100%" }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "white",
        height: "100%",
        width: "340px"
      }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        flip="horizontal"
        style={{ padding: "8px 16px 8px 8px" }}
      />

      <input
        placeholder="Type here to search"
        style={{
          border: 0,
          height: "91%",
          width: "85%",
          position: "relative",
          bottom: 0
        }}
      />
    </div>
  </div>
);

export default TaskBar;
