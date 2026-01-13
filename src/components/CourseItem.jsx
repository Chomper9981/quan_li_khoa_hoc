import React from "react";

const CourseItem = ({ course, deleteCourse, index }) => {
    const { id, title, timeCount } = course;
    
    const handleDelete = () => {
        if (window.confirm(`Bạn có chắc muốn xóa khóa học "${title}"?`)) {
            deleteCourse(id);
        }
    };
    
    return (    
        <tr>
            <td><strong>{index + 1}</strong></td>
            <td><strong>{title}</strong></td>
            <td>{timeCount} tháng</td>
            <td className="actions">
                <button className="btn edit" title="Sửa khóa học">
                    <i className="fa-solid fa-pen"></i>
                    Sửa
                </button>
                <button className="btn delete" onClick={handleDelete} title="Xóa khóa học"> 
                    <i className="fa-solid fa-trash"></i>
                    Xóa
                </button>
            </td>
        </tr>
    );
};

export default CourseItem;