import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider ({ children }){
    const [bookList, setBookList] = useState([])

    const values = useMemo(() => ({
        bookList,
        setBookList
    }), [bookList])

    return (
        <AppContext.Provider value={ values }>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;