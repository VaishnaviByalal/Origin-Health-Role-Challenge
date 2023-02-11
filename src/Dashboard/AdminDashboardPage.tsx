import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../store/reducer";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { VscChromeClose } from "@react-icons/all-files/vsc/VscChromeClose";


const AdminDashboardPage = () => {

    const label_array = useSelector<UserState, string[]>(
        (state: UserState) => state.labels);

    const [openInput,setOpenInput] = useState<boolean>(false);
    const [labelInput,setLabelInput]=useState<string>('');

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type : "ADD_LABEL" , label : labelInput })
        handleRemoveInput()
    }

    const handleRemoveInput = () => {
        setOpenInput(false)
        setLabelInput('')
    }
    
    const handleOpen = () => {
        setOpenInput(true)
    }

    return(
        <div className="admin-page">
            <span className="big-text bold-text">Admin Page</span>
            <div className="labels-list">
                {label_array.map( (label) => {
                    return <span className="medium-text">{label}</span>
                })}
            </div>
            <div className="new-label">
                {!openInput && <button className="add-label-button" onClick={handleOpen}>+Add Label</button>}
                {openInput && 
                <div>
                    <input 
                        className="add-label-input"
                        value={labelInput} 
                        onChange={(e)=>setLabelInput(e.target.value)}
                    />
                    <button onClick={handleAdd}><AiFillCheckCircle/></button>
                    <button onClick={handleRemoveInput}><VscChromeClose/></button>
                </div>
                }
            </div>
        </div>
    )
}

export default AdminDashboardPage;