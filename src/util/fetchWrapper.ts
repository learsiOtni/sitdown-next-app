type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = (method: RequestMethod) => {

    return async (url: string, body?: any, token?: any) => {

        const options: RequestInit = {
            method,
        }

        if (body) {
            options.headers = {'Content-Type': 'application/json'}
            options.body = JSON.stringify(body)
        }
        console.log(token)
        if (token) options.headers = {...options.headers, 'Authorization': `Bearer ${token}`}

        console.log(url, options);
        //return fetch(url, options).then(handleResponse);
        const response = await fetch(url, options);

        if (!response.ok) {
            // if 401, 403 includes in response.status and theres token
            // then logout
            //console.log('response not okay')
        }

        //  need to return if theres an error so rejectedValue can be called
        return await response.json() // or the can check from call if it returns a json with error  
    }
}

// fetchWrapper.post(URL, body)
export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}