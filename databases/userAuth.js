import User from "../models/userModel.js"


export const createNewUser = async (payload) => {
   return await User.create(payload);
}

export const findUser = async (userName) => {
    return await User.findOne({ userName }).lean();
}