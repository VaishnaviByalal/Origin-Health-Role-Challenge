import {nanoid} from 'nanoid';
import { LoginCreds } from '../Login/Login';
import { imageArray } from './imagePaths';

export interface UserState {
    login_status: boolean;
    admin: boolean;
    image_array: ImageTypes[];
    labels: string[];
}

export const initialState:UserState = {
    login_status : true,
    admin: true,
    image_array: imageArray.map( img => {
        return {source:img,id:nanoid(),label:''}
    }),
    labels: ['Cat','Dog','Horse']
}

export interface ImageTypes {
    source: string;
    id: string;
    label: string;
}

type Action = { type: string,login_status: boolean,login_details: LoginCreds,image_details: ImageTypes,label: string}

export const userReducer =  (state:UserState = initialState ,action : Action ) => {
    console.log(state)
    switch(action.type){
        case "ENABLE_LOGIN" : {
            const {username,password}=action.login_details;
            if (username==='user' && password===''){
                state.login_status=true;
                return {...state}
            }
            if (username==='admin' && password===''){
                state.login_status=true
                state.admin=true
                return {...state}
            }
            return {...state}
        }
        case "ENABLE_LOGOUT" : {
            state.login_status=false
            return {...state}
        }
        case "CHANGE_LABEL" : {
            const newImageArray=state.image_array.map( (img)=> img.id===action.image_details.id ? { ...img, label:action.image_details.label }: img )
            return {...state,image_array:newImageArray}
        }
        case "REMOVE_LABEL" : {
            const newImageArray=state.image_array.map( (img)=> img.id===action.image_details.id ? { ...img, label:'' }: img )
            return {...state,image_array:newImageArray}
        }
        case "ADD_LABEL" : {
            state.labels.push(action.label)
            return {...state}
        }
        default : return {...state}
    }
}