import jwt from 'jsonwebtoken';

export const organizationUser = (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization;
    if (!token) return res.status(401).json('Unauthorize user');

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json('Token not valid')
    }
}