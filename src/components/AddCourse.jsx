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
            <input 
                type="number" 
                name="timeCount"
                placeholder="⏱️ Thời gian học (tháng)..." 
                value={state.timeCount} 
                onChange={onInputChange}
                min="1"
                required
            />
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