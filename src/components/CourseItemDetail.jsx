import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../action/actions";

function CourseItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Lấy course từ Redux store dựa trên id
  const selectedCourse = useSelector((state) =>
    state.course.courses.find((course) => course.id === id),
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

  const handleDelete = () => {
    if (
      window.confirm(`Bạn có chắc muốn xóa khóa học "${selectedCourse.title}"?`)
    ) {
      dispatch(deleteCourse(selectedCourse.id));
      navigate("/");
    }
  };

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
          <div className="button-group">
            <button
              className="btn normal btn-large"
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-home"></i>
              Quay lại trang chủ
            </button>

            <button className="btn delete btn-large" onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
              Xóa khóa học
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItemDetail;
