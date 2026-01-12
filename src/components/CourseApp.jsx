import React, {useEffect, useState, useCallback} from "react";
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import {v4 as uuidv4} from 'uuid';
import {useCountCourse} from "./hooks/CountCourse";


const CourseApp = () => {

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : [];
  }
    // { id: 1, title: "Learn React" },
    // { id: 2, title: "Learn JS" },
    // { id: 3, title: "Learn Bootstrap" },
  ); 

// const addCourse = title => {
//     const newCourse = {
//         id: uuidv4(),
//         title: title
//     };
//     setCourses([...courses, newCourse]);
// }

const addCourse = useCallback((title, timeCount) => {
    setCourses(courses => [
      ...courses,
      { id: uuidv4(), title, timeCount }
    ]);
  }, []);

// const deleteCourse = id => {
//     setCourses(courses => courses.filter(courses => {
//         return courses.id !== id}));
// }

const deleteCourse = useCallback((id) => {
    setCourses(courses =>
        courses.filter(course => course.id !== id)
    );
  }, []);

const { totalCourses } = useCountCourse(courses);

const [showAddForm, setShowAddForm] = useState(false);

useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
    console.log(courses);
}, [courses])

  return (
    <div>
        <h3>Tổng số khóa học: {totalCourses}</h3>
        <button onClick={() => setShowAddForm(true)}>
          Thêm khóa học
          </button>

        {showAddForm && (
        <AddCourse
          addCourse={addCourse}
          onClose={() => setShowAddForm(false)}
        />
      )}
        <CourseList courses={courses} 
        deleteCourse = {deleteCourse}
        />
        <button onClick={() => window.location.href = '/about'}> Về chúng tôi</button>
    </div>
  );
};
export default CourseApp;
