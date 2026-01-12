import React from "react";

const CourseItem = ({ course, deleteCourse, index }) => {
    const { id, title, timeCount } = course;
  return (    
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{timeCount} tháng</td>
      <td className="actions">
        <button className="btn edit">
          Sửa
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="btn delete"onClick={() => deleteCourse(id)}> 
          Xóa
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CourseItem;
