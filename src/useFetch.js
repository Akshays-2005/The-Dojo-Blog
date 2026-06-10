import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const AboutCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: AboutCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    if (err.name === 'AbortError') console.log('fetch aborted');
                    else {
                        setError(err.message);
                        console.log(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);
        return () => AboutCont.abort();
    }, [url])
    return { data, isPending, error };
}

export default useFetch;