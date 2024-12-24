
// import { PiUserListFill } from "react-icons/pi";
// import user from '../assets/user.png'
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


const Header = ()=> {
    const [isLight, setIsLight]= useState(true)

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });


      const element = document.documentElement
  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        break;
      default:
        element.classList.remove("theme")
        break;
    }



  },[theme])

  const handleTheme = ()=> {

    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    setIsLight(!isLight)

    

  }



    return (
        <header className="flex dark:bg-slate-900 justify-between md:justify-around gap-14 w-[100%] p-2">
            <h1 className='font-semibold text-2xl hidden md:block' >Wëël Jwøk</h1>
            <div className="md:hidden"></div>
            <div className='flex gap-5 justify-end items-cente'>
               
           <div className="flex gap-2 md:gap-4 justify-end items-center">

           <div className="" onClick={handleTheme}>
          {!isLight? <MdOutlineLightMode  size={32}/>: <MdOutlineDarkMode size={32} />}
        </div>
              {/* <Link to={'/signup'}>
              <div className="bg-green-800 p-2 rounded-full cursor-pointer">
                 <h1 className="text-white font-semibold">Create account</h1>
               </div>
              </Link> */}
           </div>
               <div className="h-12 mr-6 w-12 cursor-pointer dark:bg-slate-800 bg-slate-300 p-2 rounded-full translate-x-5 transition-all duration-300 hover:scale-110">
                    <FaRegUser size={30} />
               </div>
            </div>

            
        </header>
    )
}

export default Header