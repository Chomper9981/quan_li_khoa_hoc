import {
  SET_SELECTED_COURSE,
  SET_COURSES,
  DELETE_COURSE,
} from "../action/types";

const INITIAL_STATE = {
  courses: JSON.parse(localStorage.getItem("courses")) || [],
  selectedCourse: null,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
      };

    case DELETE_COURSE: {
      const filtered = state.courses.filter((c) => c.id !== action.payload);
      localStorage.setItem("courses", JSON.stringify(filtered));
      return {
        ...state,
        courses: filtered,
      };
    }

    default:
      return state;
  }
};

export default courseReducer;
