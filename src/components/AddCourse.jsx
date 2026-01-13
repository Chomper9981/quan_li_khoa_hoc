import React, { useState } from "react";

function AddCourse (props) { 
    const [state, setState] = useState({
        title: "",
        timeCount: ""
    });

    const onInputChange = e => { 
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }; 
 
    const addCourse = e => { 
        e.preventDefault(); 
        
        if (!state.title.trim() || !state.timeCount.trim()) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        
        props.addCourse(state.title, state.timeCount);
        setState({
            title: "",
            timeCount: ""
        });
        props.onClose();
    }; 

    return ( 
        <form onSubmit={addCourse}> 
            <input 
                type="text" 
                name="title"
                placeholder="📝 Tên khóa học..." 
                value={state.title} 
                onChange={onInputChange}
                required
            />
            <select 
                name="timeCount"
                value={state.timeCount} 
                onChange={onInputChange}
                required
                className="time-select"
            >
                <option value="">⏱️ Chọn thời gian học...</option>
                <option value="1">1 tháng</option>
                <option value="2">2 tháng</option>
                <option value="3">3 tháng</option>
                <option value="4">4 tháng</option>
                <option value="5">5 tháng</option>
                <option value="6">6 tháng</option>
                <option value="7">7 tháng</option>
                <option value="8">8 tháng</option>
                <option value="9">9 tháng</option>
                <option value="10">10 tháng</option>
                <option value="11">11 tháng</option>
                <option value="12">12 tháng</option>
            </select>
            <div className="button-group">
                <button type="submit" className="btn normal">
                    <i className="fa-solid fa-check"></i>
                    Thêm
                </button>
                <button type="button" className="btn delete" onClick={() => props.onClose()}> 
                    <i className="fa-solid fa-times"></i>
                    Hủy
                </button>
            </div>
        </form> 
    );
} 

export default AddCourse;