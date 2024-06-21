import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SquareChevronLeft, Brain } from 'lucide-react';
import { FaCircleArrowLeft, FaCircleArrowRight  } from "react-icons/fa6";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const Logo = {
    title: "Texto",
    icon: <Brain />
  }
  
  const Menus = [
    {
      title: "Dashboard",
      icon: <Brain />
    },
    {
      title: "Teste",
      icon: <SquareChevronLeft />
    }
  ]

  return (
    <>
        <div className={`${isOpen ? 'w-60' : 'w-20'} duration-300 h-screen bg-sky-900 relative  p-5 pt-8 shadow-md shadow-slate-800`}>
         
        <FaCircleArrowLeft
          className={`absolute -right-4 top-20 w-12 h-8  cursor-pointer fill-gray-200 ${!isOpen && 'rotate-180' }`}
          onClick={toggleSidebar}
        />

         <div className='flex gap-x-4 items-center'>
          <span className='text-zinc-50 cursor-pointer'>{Logo.icon}</span>
          <h1 
            className={`text-white origin-left font-medium text-2xl font-bold duration-300 ${!isOpen && "scale-0"}`}> 
            {Logo.title}
          </h1>

      
          </div>


          <ul className='pt-6'>
            {Menus.map((menu, index)=> (
                <Link key={index} to='/'>
                  <li 
                    key={index} 
                    className='flex pt-6 text-gray-200 text-sm items-center gap-x-4 cursor-pointer hover:text-sky-500 font-bold'>
                    <span>{menu.icon}</span>
                    <span className={`duration-300 origin-left font-bold text-lg ${!isOpen && 'scale-0'}`}>
                      {menu.title}
                    </span> 
                  </li>
                </Link>
              )
            )}
          </ul>
          

        </div>
    </>
  );
};

export default Sidebar;