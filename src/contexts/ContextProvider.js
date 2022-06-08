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
  const [currentColor, setCurrentColor] = useState('#03C9D7'); //default color
  const [currentMode, setCurrentMode] = useState('Light'); //default mode
  const [themeSettings, setThemeSettings] = useState(false);


  // We don't use (e) here because we don't need to use the event. We are passing in 'item.color' to our onClick function in ThemeSettings. 'item.color' is a string, not an event. So when we come here there is no reason to destructure the event using 'e.target.value'. We can just call it 'mode' and pass in the mode.
  // const setMode = (e) => {
  //   setCurrentMode(e.target.value);

  //   localStorage.setItem('themeMode', e.target.value); //set the mode in local storage

  //   setThemeSettings(false); //close the settings
  // }  
  
  //so instead of above we do
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value); //set the mode in local storage

    setThemeSettings(false); //close the settings
  }

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem('colorMode', color); //set the color in local storage

    setThemeSettings(false); //close the settings
  }

  // We cant do:
  // const handleClick = (clicked) => {
  //   setIsClicked(isClicked);    
  // }
  // Because the 'isClicked' property is an {object}. We cannot override the object with a string. We need to open up the object, use the spread operator to spread the initialState (where everything is false), to spread the properties of the object. 
  // in the [] we say only change the value if it has been clicked.
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  

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
        currentColor,
        setColor,
        setCurrentColor,
        currentMode,  
        setMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

//gives us the data from the context (useStateContext), by using the context. We specify 'StateContext' as the context.
export const useStateContext = () => useContext(StateContext);