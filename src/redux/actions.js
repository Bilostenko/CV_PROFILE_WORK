import { type } from "@testing-library/user-event/dist/type";
import { CHANGE_NEW_PROJECT, CHANGE_OLD_PROJECT, CHANGE_ENG_LANGUAGE, CHANGE_UKR_LANGUAGE} from "./types";

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

export const ukrLanguage = () =>{
  return function (dispatch) {
    dispatch({
      type: CHANGE_UKR_LANGUAGE
    })
  }
}
export const engLanguage = () =>{
  return function (dispatch) {
    dispatch({
      type: CHANGE_ENG_LANGUAGE
    })
  }
}
