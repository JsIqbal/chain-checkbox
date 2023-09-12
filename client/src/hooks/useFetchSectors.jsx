import { useState, useEffect } from "react";
import axios from "axios";

const useFetchSectors = () => {
    const [options, setSectors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSectors = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:3001/api/sectors"
                );
                setSectors(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching sectors:", error);
                setLoading(false);
            }
        };

        fetchSectors();
    }, []);

    return { options, loading };
};

export default useFetchSectors;
