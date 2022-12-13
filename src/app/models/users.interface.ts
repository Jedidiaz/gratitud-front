export interface ResponseI {
    data?: LoginDataI
    error?: string
    response: string
    token?: string
}

export interface LoginDataI{
    name: string
    role: string
}
