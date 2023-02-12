import React from "react";
import { useState } from "react";
const Store = React.createContext();
export const ContextProvider = (props) => {
    const [token, setToken] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    console.log(categoryList)
    return (
        <Store.Provider value={{token: token, setToken: setToken, categoryList: categoryList, setCategoryList: setCategoryList}}>
            {props.children}
        </Store.Provider>
    )
}
export default Store;