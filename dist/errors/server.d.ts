export declare class ServerError extends Error {
    data: object;
    statusCode: number;
    constructor(message: string, data: object, statusCode: number);
}
