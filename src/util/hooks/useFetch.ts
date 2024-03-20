import { store } from "@/store/store";

interface RequestOptions {
    method: string;
    headers: {
        'Content-type'?: string
    };
    body?: string;
}

export const useFetch = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}

function request(method: string) {
    return (url: string, body?: object) => {
        const requestOptions: RequestOptions = {
            method,
            headers: authHeader(url)
        };

        if(body) {
            requestOptions.headers['Content-type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function authHeader(url: string) {
    const token = authToken();
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    if(isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${token}`}
    } else {
        return {};
    }
}

function authToken(): string | undefined {
    return store.getState().auth.credentials?.token;
}

async function handleResponse(response: Response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    // check for error
    if (!response.ok) {
        if([401, 403].includes(response.status) && authToken()){
            // logout, if unauthorized or forbidden
        }

        const error: string = (data && data.message) || response.status.toString();
        return Promise.reject(error);
    }
    return data;
    
}