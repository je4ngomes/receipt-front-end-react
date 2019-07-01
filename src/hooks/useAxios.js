import { useEffect, useState } from 'react';
import axios from 'axios';


export const useAxios = (url, requestOptions = axios.defaults) => {
    const [state, setState] = useState({ 
        data: null, 
        isLoading: true, 
        error: false 
    });

    useEffect(() => {
        setState({ data: null, isLoading: true, error: false });

        axios(url, requestOptions)
            .then(({ data }) => setState({ data, isLoading: false }))
            .catch(e => setState({ data: null, isLoading: false, error: true }));

    }, [url]);

    return state;
};