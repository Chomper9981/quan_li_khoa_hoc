import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({courses, deleteCourse}) => {
  return (
    // <ul>
    //   {courses.map(course => (
    //     <CourseItem key={course.id} course={course} 
    //     deleteCourse = {deleteCourse}
    //     />
    //   ))}
      
    // </ul>
    <div className="table_wrapper">
          <table className="crud-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Tên khóa học</th>
                <th>Thời gian</th>
                <th>Hành động</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, index) => (
                <CourseItem key={course.id} 
                course={course} 
                deleteCourse = {deleteCourse}
                index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
  );
};

export default CourseList;
