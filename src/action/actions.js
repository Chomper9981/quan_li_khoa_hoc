import { 
  SET_SELECTED_COURSE 
} from './types';

export const setSelectedCourse = (course) => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course
  };
};