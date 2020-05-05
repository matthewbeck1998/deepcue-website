import { Action, State } from "./types";

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_SECTION":
      return { ...state, currentSection: action.value };
  }
}

export const initialState: State = {
  currentSection: "HOME_SECTION"
};
