import { CHANGE_NEW_PROJECT, CHANGE_OLD_PROJECT} from "./types";

export const newProjects = () => {
  return function(dispatch) {
    dispatch({
      type: CHANGE_NEW_PROJECT
    });
  };
};

export const oldProjects = () => {
  return function(dispatch) {
    dispatch({
      type: CHANGE_OLD_PROJECT
    });
  };
};
