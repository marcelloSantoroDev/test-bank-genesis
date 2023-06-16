import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider ({ children }){

    const values = useMemo(() => ({

    }), [])

    return (
        <AppContext.Provider value={ values }>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;