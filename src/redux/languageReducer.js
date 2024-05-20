import { CHANGE_ENG_LANGUAGE, CHANGE_UKR_LANGUAGE } from "./types";

const initialState = {
  selectedLanguage: 'UK' 
};


export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ENG_LANGUAGE:
      return {
        ...state,
        selectedLanguage: 'EN', 
      };
    case CHANGE_UKR_LANGUAGE:
      return {
        ...state,
        selectedLanguage: 'UK', 
      };
    default:
      return state;
  }
};