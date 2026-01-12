import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({courses, deleteCourse}) => {
  return (
    <ul>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} 
        deleteCourse = {deleteCourse}
        />
      ))}
    </ul>
  );
};

export default CourseList;
