import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCourse } from "../action/actions";

function CourseItemDetail() {
  // Lấy state từ Redux store
  const selectedCourse = useSelector((state) => state.course.selectedCourse);
  
  // Lấy dispatch function
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(setSelectedCourse(location.state.course));
  }, [id, location.state, dispatch, navigate]);

  return (
    <div className="about-container">
      <h2 className="about-title">Chi tiết khóa học</h2>

      <div className="about-content">
        <div className="about-section">
          <div className="about-label">Tên khóa học:</div>
          <div className="about-text">
            {selectedCourse?.title}
          </div>
        </div>

        <div className="about-section">
          <div className="about-label">Thời lượng khóa học:</div>
          <div className="about-text">
            {selectedCourse?.timeCount} tháng
          </div>
        </div>

        <div className="about-footer">
          <button
            className="btn normal btn-large"
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-home"></i>
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseItemDetail;

// // map state (redux store) to props react
// const mapStateToProps = (state) => ({
//   selectedCourse: state.course.selectedCourse,
// });

// // map dispatch (redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     setSelectedCourse: (course) => dispatch(setSelectedCourse(course)),
//   };
// };

// //higher order component
// export default connect(mapStateToProps, {
//   setSelectedCourse,
// })(CourseItemDetail);