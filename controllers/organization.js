import { getOrganizationData, loginOrgUser, registerNewUser } from "../services/userAuth.js";
import { validateRegistration } from "../validations/validateRegisterPayload.js";


export const registerUser = async (req, res) => {
    const requestBody = req.body;
    const validatePayload = validateRegistration(requestBody);

    if(validatePayload.error) {
        res.status(401).send(validatePayload.error.message);
    }
    const regiterUser = await registerNewUser(requestBody);

    if(regiterUser instanceof Error) {
        return res.status(401).send(regiterUser.message);
    }
    
    res.status(200).send("Register Successfully");
}

export const loginUser = async (req, res) => {
    const requestBody = req.body;
    const token = await loginOrgUser(requestBody);

    if(token instanceof Error) {
        return res.status(401).send(token.message);
    }

    res.status(200).json({ token });
}

export const organizationData = async (req, res) => {
    const userData = req.user;
    const userName = userData?.userName;

    const data = await getOrganizationData(userName);

    if(data instanceof Error) {
        return res.status(401).send(data.message);
    }

    res.status(200).json({ data });
}