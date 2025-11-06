import jwt from 'jsonwebtoken'

const SECRET = 'your-secret-key'

export function signToken(payload: string): string | number {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' })
}

export function verifyToken(token: string): string | jwt.JwtPayload | number {
  return jwt.verify(token, SECRET)
}
