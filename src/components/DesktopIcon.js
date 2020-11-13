import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { contextMenu, Item, Menu, Separator } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import "../styles.css";

const DesktopIconContextMenu = () => (
  <Menu id="desktopIconContextMenu">
    <Item>Copy</Item>
    <Separator />
    <Item>Paste</Item>
    <Item>Cut</Item>
  </Menu>
);

const handleDesktopIconContextMenu = (e) => {
  e.preventDefault();
  contextMenu.show({
    id: "desktopIconContextMenu",
    event: e
  });
};

const DesktopIcon = (name, icon) => (
  <div>
    <div
      className="DesktopIcon"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        height: "calc(100vh / 8)",
        width: "64px",
        marginBottom: "16px",
        padding: "2px"
      }}
      onContextMenu={handleDesktopIconContextMenu}
    >
      <FontAwesomeIcon icon={icon} size="3x" color="white" opacity="0.8" />
      <span
        style={{
          color: "white",
          textShadow: "0 0 2px #000",
          fontSize: "0.8em",
          marginTop: "4px"
        }}
      >
        {name}
      </span>
    </div>
    <DesktopIconContextMenu />
  </div>
);

export default DesktopIcon;
