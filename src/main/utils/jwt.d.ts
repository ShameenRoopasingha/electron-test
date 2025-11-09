import jwt from 'jsonwebtoken';
export declare function signToken(payload: string): string | number;
export declare function verifyToken(token: string): string | jwt.JwtPayload | number;
