// utils/auth.ts
import { jwtDecode } from 'jwt-decode';

interface AdminTokenPayload {
    id: number;
    email: string;
    role: string;
    iat: number;
    exp: number;
}

export function getAdminFromToken(): AdminTokenPayload | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const decoded = jwtDecode<AdminTokenPayload>(token);
        return decoded;
    } catch {
        console.error('Invalid token');
        return null;
    }
}

