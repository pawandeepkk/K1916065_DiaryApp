import React from "react";

const ItemContext = React.createContext();

export const ItemProvider = ({children}) => {
    return (
        <ItemContext.Provider value={2021}>
            {children}
        </ItemContext.Provider>
    )
};

export default ItemContext;