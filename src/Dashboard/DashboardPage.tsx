import React from "react";
import { useSelector } from "react-redux";
import { ImageTypes, UserState } from "../store/reducer";
import './dashboardpage.module.css';

const DashboardPage = () => {

    const image_array = useSelector<UserState, ImageTypes[]>(
        (state: UserState) => state.image_array);

    return(
        <div>
            Dashboard
            {image_array.map( (img) => {
                return <img src={img.source} key={img.id}/>
            })}
        </div>
    )
}

export default DashboardPage;