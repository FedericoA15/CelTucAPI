import expressJwt from 'express-jwt';
import { Request, Response, NextFunction } from 'express';

export const authenticateJWT = expressJwt;

export const handleAuthError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ message: 'Invalid or expired token' });
    } else {
        next(err);
    }
};


