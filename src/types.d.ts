export type Section =
  | "HOME_SECTION"
  | "ABOUT_SECTION"
  | "TEAM_SECTION"
  | "RESOURCES_SECTION"
  | "NEWS_SECTION";

interface State {
  currentSection: Section;
}

interface Action {
  type: "CHANGE_SECTION";
  value: Section;
}

interface SectionProps {
  state: State;
}

interface HeaderProps {
  dispatch: React.Dispatch<Action>;
}

interface TabSelectorProps {
  dispatch: React.Dispatch<Action>;
}
