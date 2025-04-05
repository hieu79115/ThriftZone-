export interface User {
    username: string;
    password: string;
    fullName: string;
    birthDate: Date;
    gender: string;
    address?: string;
    phone: string;
    email?: string;
    role: string;
    createdAt: Date;

    avatarFileId?: string; 
}