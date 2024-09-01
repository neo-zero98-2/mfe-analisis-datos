import { AxiosError } from "axios";

export interface Response {
    readonly code: string;
    readonly message: string;
}

export interface ResponseSuccess<T> extends Response {
    readonly data: T;
}

// Define la interfaz para el error de Axios
interface AxiosErrorResponse {
    message: string;        // Mensaje de error
    response?: {
        data?: any;           // Datos de error retornados por el servidor
        status?: number;      // Código de estado HTTP
        headers?: any;        // Encabezados de la respuesta
    };
    request?: AxiosError;          // La solicitud realizada (ej. XMLHttpRequest)
    config?: any;           // Configuración de la solicitud
}
