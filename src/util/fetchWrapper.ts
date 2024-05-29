type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = (method: RequestMethod) => {

    return async (url: string, body?: any, token?: any) => {

        const options: RequestInit = {
            method,
        }

        if (body) {
            // doesnt work if body is image, only works with form texts
            options.headers = {'Content-Type': 'application/json'}
            options.body = JSON.stringify(body)
        }

        if (token) options.headers = {...options.headers, 'Authorization': `Bearer ${token}`}

        const response = await fetch(url, options);

        // if there's an error, API will return a JSON with errors in it, which can be use to display
        return await response.json();
    }
}

// fetchWrapper.post(URL, body, token)
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}