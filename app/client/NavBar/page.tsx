import React from 'react'
import ThemeChangerButton from '../store/ThemeChangerButton'
import { usePathname } from 'next/navigation';
import Logout from '../Logout/page';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Navbar = () => {
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.userData)
  return (
    <div className='h-[10vh] w-full flex items-center  border-2 border-black '>
      <div className='  w-full flex flex-row items-center justify-between  px-10 border-0 border-black '>
        <h1 className='hover:border-b-amber-50 hover:border-b-1 '>Atharva's Next</h1>

        <div className='h-auto flex flex-row items-center justify-end gap-4 w-[50%] border-0 border-black'>
          <h1>{user?.username || 'user_name' }</h1>

          <img className='rounded-full' src={user?.image} alt="no img" height={30} width={30} />

          <div className='w-fit h-auto  border-0 border-black mt-1.5 hover:border-b-amber-50 hover:border-b-1'>
            <ThemeChangerButton/>
          </div>
          { pathname === "/client/dashboard" &&
            <Logout/>
            }
        </div>
      </div>


    </div>
  )
}

export default Navbar























// import React from 'react'

// const MobileNav = () => {
//   return (

//     <div className=' fixed bg-gray-900 opacity-[70%] h-screen w-full transition-transform z-1 '>
//         <div className='fixed bg-amber-50 w-[70vw] h-full flex flex-col items-center-safe  justify-center 
//         text-2xl text-black '>


//                 <ul className='space-y-2' >
//                     <li>home</li>
//                     <li>home</li>
//                     <li>home</li>
//                     <li>home</li>
//                 </ul>

//         </div>


//     </div>
//   )
// }

// export default MobileNav