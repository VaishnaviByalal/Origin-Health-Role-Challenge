import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../store/reducer";

interface Props {
    source: string;
    id: string;
    label: string;
}

const Image = ({source,id,label}:Props) => {

    const label_array = useSelector<UserState, string[]>(
        (state: UserState) => state.labels);

    const [openlabel,setOpenlabel] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const handleOpenLabel = () => {
        setOpenlabel(true)
        dispatch({ type: "CHANGE_LABEL" , image_details : {label:label_array[0],id,source}});
    }

    const dispatch = useDispatch();
    
    const handleCloseLabel = () => {
        setOpenlabel(false)
        dispatch({ type: "REMOVE_LABEL" , image_details : {label:'',id,source}});
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        dispatch({ type: "CHANGE_LABEL" , image_details : {label:e.target.value,id,source}});
    };

    const isEmptyLabel = label==='';
    
    return (
        <div className="image-wrapper">
            <div className={"image"}>
                <img src={source} key={id}/>
            </div>
            <div className="label">
                <div>
                    {!openlabel && <button onClick={handleOpenLabel}>Assign Label</button>}
                    {openlabel && <div>
                        <select value={value} onChange={(e)=>handleChange(e)}>
                            {label_array.map ( (label) => {
                                return <option key={label}>{label}</option>
                            })}
                        </select>
                    </div>}
                </div>
                <div>
                    {!isEmptyLabel && <button onClick={handleCloseLabel}>Remove Label</button>}
                </div>
            </div>
        </div>
    )
}

export default Image;