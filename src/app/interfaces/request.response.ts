export interface UsersResponse {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: User[];
    support: Support;
}

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;
}



export interface UserResponse {
    data: User;
    support: Support;
}

export interface Customer {
    id: string;
    fullName: string;
    phone: string;
    email: string;
    birthDate: string | Date;
    address: string;
    notes: string;
    photo: string;
    gender: string;
}

