import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

//The initial states of the Navbar items
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

//the 'children' returns the underlying component behind the ContextProvider
export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true); 

  //once we create the provider, we render out the children and pass the values we want to wrap our app with. 
  return (
    <StateContext.Provider
      value={{ 
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

//gives us the data from the context (useStateContext), by using the context. We specify 'StateContext' as the context.
export const useStateContext = () => useContext(StateContext);