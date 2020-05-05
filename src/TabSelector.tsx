import React from "react";
import { Section, TabSelectorProps } from "./types";

function TabSelector({ dispatch }: TabSelectorProps) {
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
    <div className="tab-selector">
      <div className="tab" onClick={onHomeTabClick}>
        <strong className="tab-label">Home</strong>
      </div>
      <div className="tab" onClick={onAboutTabClick}>
        <strong className="tab-label">About</strong>
      </div>
      <div className="tab" onClick={onTeamTabClick}>
        <strong className="tab-label">Team</strong>
      </div>
      <div className="tab" onClick={onResourcesTabClick}>
        <strong className="tab-label">Resources</strong>
      </div>
      <div className="tab" onClick={onNewsTabClick}>
        <strong className="tab-label">News</strong>
      </div>
    </div>
  );
}

export default TabSelector;
