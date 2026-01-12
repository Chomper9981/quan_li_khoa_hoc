import React from "react";

const CourseItem = ({ course, deleteCourse }) => {
    const { id, title, timeCount } = course;
  return (
    <li>
      <span>{title}</span>
      <span> </span>
      <span>{timeCount} tháng</span>
      <button onClick={() => deleteCourse(id)}> X </button>
    </li>
  );
};

export default CourseItem;
