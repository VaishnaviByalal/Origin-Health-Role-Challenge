import React from "react";
import { useSelector } from "react-redux";
import { ImageTypes, UserState } from "../store/reducer";
import './dashboardpage.module.css';
import Image from "./Image";

const DashboardPage = () => {

    const image_array = useSelector<UserState, ImageTypes[]>(
        (state: UserState) => state.image_array);

    return(
        <div className="user-page">
            <span className="big-text bold-text">User Dashboard</span>
            <div className="images_display">
                {image_array && image_array.map( (img) => {
                    return <Image source={img.source} id={img.id} label={img.label} key={img.id}/>
                })}
            </div>
        </div>
    )
}

export default DashboardPage;