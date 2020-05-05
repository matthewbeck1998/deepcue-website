import React from "react";
import TitleBar from "./TitleBar";
import TabSelector from "./TabSelector";
import { HeaderProps } from "./types";

function Header({ dispatch }: HeaderProps) {
  return (
    <div className="header">
      <TitleBar />
      <TabSelector dispatch={dispatch} />
    </div>
  );
}

export default Header;
