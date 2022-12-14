import { createNewUser, findUser, findUserByUserNameAndPassword } from "../databases/userAuth.js"
import jwt from 'jsonwebtoken';
import axios from "axios";

export const registerNewUser = async (requestPayload) => {
    const user = await findUser(requestPayload.userName);

    if(user) {
        return new Error('User Already Registered');
    }
    
    return await createNewUser(requestPayload);    
}

export const loginOrgUser = async (requestPayload) => {
    const userdata = await findUserByUserNameAndPassword(requestPayload.userName, requestPayload.password);

    if(!userdata) {
        return new Error('User Does Not Exists')
    }

    return jwt.sign(userdata, 'secretkey');
}

export const getOrganizationData = async (userName, password) => {
    const userdata = await findUserByUserNameAndPassword(userName, password);

    if(!userdata) {
        return new Error('User Does Not Exists')
    }

    const data = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    const result = data.data;
    return result;
}