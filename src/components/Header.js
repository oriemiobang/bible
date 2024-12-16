
// import { PiUserListFill } from "react-icons/pi";
import user from '../assets/user.png'

const Header = ()=> {
    return (
        <header className="flex justify-around gap-14 w-[100%] p-2">
            <h1 className='font-semibold text-2xl' >Wëël Jwøk</h1>
            <div className='flex gap-5 justify-center items-center'>
               <div className='bg-slate-300  p-2 justify-center items-center rounded-full cursor-pointer hidden md:block'>
              <p >Get the app</p>
               </div>
               <div className="h-12 w-12 cursor-pointer hover:bg-slate-300 p-2 rounded-full translate-x-5 transition-all duration-300 hover:scale-110">
  <img src={user} alt="User" />
</div>
            </div>

            
        </header>
    )
}

export default Header