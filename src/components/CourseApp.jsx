import React, {useEffect, useState, useCallback} from "react";
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import {v4 as uuidv4} from 'uuid';
import {useCountCourse} from "./hooks/CountCourse";
import { useNavigate } from "react-router-dom";

const CourseApp = () => {

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : [];
  }); 

  const addCourse = useCallback((title, timeCount) => {
    setCourses(courses => [
      ...courses,
      { id: uuidv4(), title, timeCount }
    ]);
  }, []);

  const deleteCourse = useCallback((id) => {
    setCourses(courses =>
        courses.filter(course => course.id !== id)
    );
  }, []);

  const { totalCourses } = useCountCourse(courses);

  const [showAddForm, setShowAddForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
    console.log(courses);
  }, [courses])

  return (
    <div className="stack">
      <h3>📚 Tổng số khóa học: {totalCourses}</h3>
      
      <div className="button-group">
        <button className="btn normal" onClick={() => setShowAddForm(true)}>
          <i className="fa-solid fa-plus"></i>
          Thêm khóa học
        </button>
        
        <button className="btn normal" onClick={() => navigate("/about")}>
          <i className="fa-solid fa-info-circle"></i>
          Về chúng tôi
        </button>
      </div>

      {showAddForm && (
        <AddCourse
          addCourse={addCourse}
          onClose={() => setShowAddForm(false)}
        />
      )}
      
      {courses.length === 0 ? (
        <div className="empty-state">
          <i className="fa-solid fa-book-open"></i>
          <p>Chưa có khóa học nào. Hãy thêm khóa học đầu tiên!</p>
        </div>
      ) : (
        <CourseList courses={courses} deleteCourse={deleteCourse} />
      )}
    </div>
  );
};

export default CourseApp;