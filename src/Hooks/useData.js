import { useEffect, useState } from "react";


const useData = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://afternoon-harbor-83297.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems]
};
export default useData;
