import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

    const CardContext = createContext();

    function CardContextProvider({children}){
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("http://localhost:7000/api/card")
            .then( res => res.json())
            .then( data => {
                setCards(data);
                setLoading(false);
            })
            .catch((err) => console.error("Veri çekme hatası:", err));
    }, []);

    return (
        <CardContext.Provider value={{cards, loading}}>
            {children}
        </CardContext.Provider>
    );
};

export {CardContextProvider, CardContext}

CardContextProvider.propTypes = {
    children : PropTypes.node.required
}