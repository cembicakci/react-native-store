import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data: response } = await axios.get(url);
            setData(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error }

}

export default useFetch