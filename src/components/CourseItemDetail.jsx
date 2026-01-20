import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Lấy course từ Redux store dựa trên id
  const selectedCourse = useSelector((state) => 
    state.course.courses.find(course => course.id === id)
  );

  if (!selectedCourse) {
    return (
      <div className="about-container">
        <p>Không tìm thấy khóa học</p>
        <button className="btn normal" onClick={() => navigate("/")}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="about-container">
      <h2 className="about-title">Chi tiết khóa học</h2>
      <div className="about-content">
        <div className="about-section">
          <div className="about-label">Tên khóa học:</div>
          <div className="about-text">{selectedCourse.title}</div>
        </div>
        <div className="about-section">
          <div className="about-label">Thời lượng khóa học:</div>
          <div className="about-text">{selectedCourse.timeCount} tháng</div>
        </div>
        <div className="about-footer">
          <button className="btn normal btn-large" onClick={() => navigate("/")}>
            <i className="fa-solid fa-home"></i>
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseItemDetail;