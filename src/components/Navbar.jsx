import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import mattFixed02 from '../data/mattFixed02.png'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent
    content={title}
    position='BottomCenter'
  >
    <button
      type='button'
      onClick={customFunc}
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth) 

    window.addEventListener('resize', handleResize) //we track all of the resize options. If it resizes, then we call the handle resize function.

    handleResize() //figures out initial width

    //We must remove the event listener when the component is unmounted.
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  // We need to track the change of the screen size. IF the screen size is lower than 900, set the active menu to false (off)
  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton 
        title='Menu'
        // We use this to toggle the menu. We write it out instead of just writing '{customFunc}' because not all of the NavButtons will perform the same action as this one.
        customFunc={handleActiveMenu} 
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      {/* Other Nav Icons */}
      <div className='flex'>
        <NavButton 
          title='Cart'    
          customFunc={() => handleClick('cart')} 
          color={currentColor}
          icon={<FiShoppingCart />}
        />        
        <NavButton 
          title='Chat'    
          dotColor='#03C9D7'
          customFunc={() => handleClick('chat')} 
          color={currentColor}
          icon={<BsChatLeft />}
        />        
        <NavButton 
          title='Notifications'   
          dotColor="rgb(254, 201, 15)" 
          customFunc={() => handleClick('notification')} 
          color={currentColor}
          icon={<RiNotification3Line />}
        /> 

        <TooltipComponent
          content='Profile'
          position='BottomCenter'
        >
          <div 
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img 
              className='rounded-full w-8 h-8'
              src={mattFixed02}
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> { ' ' }
              <span className='text-gray-400 font-bold ml-1 text-14'>Matto</span> 
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>   

        {isClicked.cart && <Cart />}            
        {isClicked.chat && <Chat />}            
        {isClicked.notification && <Notification />}            
        {isClicked.userProfile && <UserProfile />}            
      </div>
    </div>
  )
}

export default Navbar