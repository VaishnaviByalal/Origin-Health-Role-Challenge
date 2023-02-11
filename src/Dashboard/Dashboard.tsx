import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { UserState } from '../store/reducer';
import DashboardPage from "./DashboardPage"
import './dashboard.module.css';

const Dashboard = () => {

    const admin_status = useSelector<UserState,boolean>( (state:UserState) =>state.admin)

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type : "ENABLE_LOGOUT"});
    }

    return(
        <div>
            <div className={'navbar'}>
                <text className={'navbar-text'}>Welcome User</text>
                <button onClick={handleLogout} className={'logout-button'}>Logout</button>
            </div>
            <div className={'dashboard-page'}>
                <DashboardPage />
                {admin_status && <>Hello Admin</>}
            </div>
        </div>
    )
}

export default Dashboard;