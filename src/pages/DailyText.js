import {  useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiBookmarksSimpleFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom"

const DailyText = ()=> {

    return (<div className="w-full h-screen flex items-center justify-center">

        <p>This is daily text</p>


                         
        <div className="flex justify-between px-5 w-[100%] pb-2 md:hidden dark:bg-slate-900   z-50 bg-slate-50 bottom-0 fixed ">
                          <NavLink to='/dailyText'>
                          <div className= 'text-orange-400 flex items-center flex-col'>
                          <RiHome6Line size={25} />
                          <p>Today</p>
                          </div>
                          </NavLink>
                          <NavLink to='/'>
                          <div className="flex items-center flex-col">
                          <MdOutlineMenuBook size={25} />
                          <p>Book</p>
                          </div>
                          </NavLink>
                         <NavLink to='/bookMark'>
                         <div className="flex items-center flex-col">
                          <PiBookmarksSimpleFill size={25}/>
                          <p>Bookmark</p>
                          </div>
                         </NavLink>
            
                        </div>
                        
                        
                 
            


    </div>)
}

export default DailyText;