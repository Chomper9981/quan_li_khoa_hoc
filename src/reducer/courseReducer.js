import { 
  SET_SELECTED_COURSE,
  SET_COURSES,
} from '../action/types';

const INITIAL_STATE = {
  courses: JSON.parse(localStorage.getItem('courses')) || [],
  selectedCourse: null,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload
      };
      
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload
      };

    default:
      return state;
  }
};

export default courseReducer;