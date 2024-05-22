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

        if (!response.ok) { console.log("Fetch Error") }

        //  need to return if theres an error so rejectedValue can be called
        return await response.json() // or the can check from call if it returns a json with error  
    }
}

// fetchWrapper.post(URL, body, token)
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}