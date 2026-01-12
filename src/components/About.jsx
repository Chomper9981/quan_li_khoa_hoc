import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
        1. Đây là ứng dụng quản lí khóa học. <br />
        2. Ứng dụng này được xây dựng bởi ReactJS.<br />
        3. Bạn có thể quay lại trang chủ bằng cách nhấn nút bên dưới: <br />      
        <button className="btn normal" onClick={() => navigate("/")}>
          Quay lại trang chủ
          <i className="fa-solid fa-plus"></i>
        </button>
    </div>      
  )
}

export default About
