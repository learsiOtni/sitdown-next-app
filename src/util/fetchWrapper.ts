import { store } from '@/store/store';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = (method: RequestMethod) => {

    return async (url: string, body?: {}) => {
        const options: RequestInit = {
            method,
            headers: body ? {'Content-Type': 'application/json' } : setHeader(url),
            body: body && JSON.stringify(body)
        }

        //return fetch(url, options).then(handleResponse);

        const response = await fetch(url, options);

        if (!response.ok) {
            // if 401, 403 includes in response.status and theres token
            // then logout
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

//const getToken = () => store.getState().auth.credentials.token;

const setHeader = (url: string): {} => {

    /*const test = false;
    if (test) {
        console.log('here');
        const token = getToken();
        const isAuth = !!token;

        if(!isAuth) return {}; //&& !not api url?
        return { Authorization: `Bearer ${token}`}
    }*/
    
    // api url
    return {}
}







