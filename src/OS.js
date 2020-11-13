import { faDesktop, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "react-contexify/dist/ReactContexify.min.css";
import DesktopIcon from "./components/DesktopIcon";
import TaskBar from "./components/TaskBar";
import "./styles.css";

const DEBUG = { outline: "1px solid red" }; // for debugging CSS

export default function OS() {
  const icons = {
    "This PC": faDesktop,
    "Recycle Bin": faTrash
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        background: "url(wp.jpg) center/cover no-repeat"
      }}
    >
      <div style={{ paddingTop: "4px" }}>
        {Object.entries(icons).map((d) => DesktopIcon(...d))}
      </div>

      <TaskBar />
    </div>
  );
}
