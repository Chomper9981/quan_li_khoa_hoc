import { 
  SET_SELECTED_COURSE 
} from '../action/types';

const INITIAL_STATE = {
  courses: [],
  selectedCourse: null,
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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