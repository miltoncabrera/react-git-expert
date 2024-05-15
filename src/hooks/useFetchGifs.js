import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [dataGif, setDataGif] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const processApiGifs = async () => {
        const objectGif = await getGifs(category);
        setDataGif(objectGif);
        setIsLoading(false);
    };

    useEffect(() => {
        processApiGifs();
    }, []);

    return {
        dataGif,
        isLoading
    }
}
