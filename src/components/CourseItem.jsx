import React from "react";
import { useNavigate } from "react-router-dom";

const CourseItem = ({ course, deleteCourse, index }) => {
  const { id, title, timeCount } = course;
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc muốn xóa khóa học "${title}"?`)) {
      deleteCourse(id);
    }
  };

  const handleViewDetail = () => {
    navigate(`/${id}`, { state: { course } });
  };

  return (
    <tr>
      <td>
        <strong>{index + 1}</strong>
      </td>
      <td>
        <strong>{title}</strong>
      </td>
      <td>{timeCount} tháng</td>
      <td className="actions">
        <button className="btn edit" title="Sửa khóa học">
          <i className="fa-solid fa-pen"></i>
          Sửa
        </button>
        <button
          className="btn delete"
          onClick={handleDelete}
          title="Xóa khóa học"
        >
          <i className="fa-solid fa-trash"></i>
          Xóa
        </button>
        <button
          className="btn normal"
          onClick={handleViewDetail}
          title="Xem chi tiết khóa học"
        >
          <i className="fa-solid fa-eye"></i>
          Chi tiết
        </button>
      </td>
    </tr>
  );
};

export default CourseItem;
