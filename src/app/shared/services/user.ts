export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
}

export interface UserLoggato {
    displayName: string;
    role: string;
    session: string;
    uid: string;
}
