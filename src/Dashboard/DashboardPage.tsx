import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ImageTypes, UserState } from "../store/reducer";
import './dashboardpage.module.css';
import Image from "./Image";

const DashboardPage = () => {

    const image_array = useSelector<UserState, ImageTypes[]>(
        (state: UserState) => state.image_array);

    const labels = useSelector<UserState, string[]>(
        (state: UserState) => state.labels);

    const [label,setLabel] = useState<string>('');

    const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '')
            setLabel('')
        else
            setLabel(e.target.value)
    }

    return(
        <div className="user-page">
            <span className="big-text bold-text">User Dashboard</span>
            <div>
                <span>Select Filter : </span>
                <select onChange={(e)=>handleFilter(e)}>
                    <option value={''}>All</option>
                    {labels.map((label, index) => {
                        return <option key={index} >
                            {label}
                        </option>
                    })}
                </select>
            </div>
            {label==='' && <div className="images_display">
                {image_array && image_array.map( (img) => {
                    return <Image source={img.source} id={img.id} label={img.label} key={img.id}/>
                })}
            </div>}
            {label!=='' && <div className="images_display">
                {image_array && image_array.map( (img) => {
                    if (img.label===label)
                        return <Image source={img.source} id={img.id} label={img.label} key={img.id}/>
                })}
            </div>}
        </div>
    )
}

export default DashboardPage;