export interface ResponseI {
    name?: string
    message?: string
    error?: Error
    response: string
    token?: string
    ok?: boolean
    status?: number
    statusText?: string
    url?: string
    isAdmin?: boolean
}

export interface Error{
    message: string
}
