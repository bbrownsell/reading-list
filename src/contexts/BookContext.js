import React, { createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = ({children}) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books));
    },[books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

// {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
// {title: 'the final empire', author: 'brandon sanderson', id: 2},