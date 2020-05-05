import React from "react";
import { HeaderProps, Section } from "./types";

function Header({ dispatch }: HeaderProps) {
  function onTabClickFactory(section: Section) {
    function onTabClick() {
      dispatch({
        type: "CHANGE_SECTION",
        value: section
      });
    }

    return onTabClick;
  }

  const onHomeTabClick = React.useCallback(onTabClickFactory("HOME_SECTION"), [
    dispatch
  ]);
  const onAboutTabClick = React.useCallback(
    onTabClickFactory("ABOUT_SECTION"),
    [dispatch]
  );
  const onTeamTabClick = React.useCallback(onTabClickFactory("TEAM_SECTION"), [
    dispatch
  ]);
  const onResourcesTabClick = React.useCallback(
    onTabClickFactory("RESOURCES_SECTION"),
    [dispatch]
  );
  const onNewsTabClick = React.useCallback(onTabClickFactory("NEWS_SECTION"), [
    dispatch
  ]);

  return (
    <div className="header">
      <div className="tab-selector">
        <div className="tab" onClick={onHomeTabClick}>
          Home
        </div>
        <div className="tab" onClick={onAboutTabClick}>
          About
        </div>
        <div className="tab" onClick={onTeamTabClick}>
          Team
        </div>
        <div className="tab" onClick={onResourcesTabClick}>
          Resources
        </div>
        <div className="tab" onClick={onNewsTabClick}>
          News
        </div>
      </div>
    </div>
  );
}

export default Header;
