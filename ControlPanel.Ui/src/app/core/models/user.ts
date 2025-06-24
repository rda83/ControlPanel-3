export interface User {
    name: string;
    exp?: number; // Срок действия
    aud?: string[] | string;
    iss?: string;
    jti?: string;
}