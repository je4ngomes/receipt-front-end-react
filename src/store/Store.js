import React, { useContext, createContext, useReducer } from 'react';

import reducers from './reducers';

const StoreContext = createContext();

const StoreProvider = ({ children }) => (
    <StoreContext.Provider value={reducers}>
        { children }
    </StoreContext.Provider>
);

const useReducerSelector = name =>
    useReducer(
        ...useContext(StoreContext)[name]
    );

export {
    StoreProvider,
    useReducerSelector
};