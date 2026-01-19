import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h2 className="about-title">📖 Về Ứng Dụng Quản Lý Khóa Học</h2>

      <div className="about-content">
        <div className="about-section">
          <div className="about-label">🎯 Giới thiệu:</div>
          <div className="about-text">
            Đây là ứng dụng quản lý khóa học được thiết kế để giúp bạn dễ dàng
            theo dõi và quản lý các khóa học của mình.
          </div>
        </div>

        <div className="about-section">
          <div className="about-label">⚛️ Công nghệ:</div>
          <div className="about-text">
            Ứng dụng này được xây dựng bằng ReactJS - một thư viện JavaScript
            mạnh mẽ và hiện đại.
          </div>
        </div>

        <div className="about-section">
          <div className="about-label">✨ Tính năng:</div>
          <ul className="about-features">
            <li>Thêm khóa học mới với tên và thời gian học</li>
            <li>Xem danh sách tất cả các khóa học</li>
            <li>Xóa khóa học không cần thiết</li>
            <li>Lưu trữ dữ liệu cục bộ (LocalStorage)</li>
          </ul>
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
};

export default About;
