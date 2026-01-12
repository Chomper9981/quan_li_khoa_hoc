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
                    placeholder="Tên khoa học..." 
                    value={state.title} 
                    onChange={onInputChange} 
                /> <br/>
                <input 
                    type="text" 
                    name="timeCount"
                    placeholder="Thời gian học..." 
                    value={state.timeCount} 
                    onChange={onInputChange} 
                /> <br/>
                <input  
                    type="submit" 
                    value="Submit"  
                    /> 
                <button onClick={() => props.onClose()}>Hủy</button>
            </form> 
    );
} 
export default AddCourse; 