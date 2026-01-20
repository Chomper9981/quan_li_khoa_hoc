import { 
  SET_SELECTED_COURSE,
  SET_COURSES,
  ADD_COURSE,
  DELETE_COURSE
} from './types';

export const setSelectedCourse = (course) => {
  return {
    type: SET_SELECTED_COURSE,
    payload: course
  };
};

export const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    payload: courses
  };
};

export const addCourse = (course) => {
  return {
    type: ADD_COURSE,
    payload: course
  };
};

export const deleteCourse = (id) => {
  return {
    type: DELETE_COURSE,
    payload: id
  };
};