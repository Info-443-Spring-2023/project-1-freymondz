
export interface UserData {
    createdAt: string,
    timezone: string,
    isAdmin?: boolean,
    edit: boolean
}

export interface Organization {
    name: string,

}

export interface Position {
    name: string,
}

export interface Interest {
    name: string
}

export interface Accessibility {
    name: string
}