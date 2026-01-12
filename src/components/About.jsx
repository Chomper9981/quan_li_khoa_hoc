import React from 'react'

const About = () => {
  return (
    <div>
        1. Đây là ứng dụng quản lí khóa học. <br />
        2. Ứng dụng này được xây dựng bởi ReactJS.<br />
        3. Bạn có thể quay lại trang chủ bằng cách nhấn nút bên dưới: <br />      
      <button onClick={() => window.location.href = '/'}> Quay lại</button>
    </div>      
  )
}

export default About
