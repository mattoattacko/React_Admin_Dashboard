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

  const [isClicked, setIsClicked] = useState(initialState);

  const [screenSize, setScreenSize] = useState(undefined);

  // We cant do:
  // const handleClick = (clicked) => {
  //   setIsClicked(isClicked);    
  // }
  // Because the 'isClicked' property is an {object}. We cannot override the object with a string. We need to open up the object, use the spread operator to spread the initialState (where everything is false), to spread the properties of the object. 
  // in the [] we say only change the value if it has been clicked.
  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true
    })
  }

  //once we create the provider, we render out the children and pass the values we want to wrap our app with. 
  return (
    <StateContext.Provider
      value={{ 
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

//gives us the data from the context (useStateContext), by using the context. We specify 'StateContext' as the context.
export const useStateContext = () => useContext(StateContext);