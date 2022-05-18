import React, { createContext, useState } from 'react'

const Context = createContext({
    usersData: null,
    setUsersData: null
})

export default Context


export const ContextProvider = (props) => {
    const [usersData, setUsersData] = useState()

    const contextValues = {
        usersData,
        setUsersData,
    }
    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )
}