// import { RootState } from '@reduxjs/toolkit/query'
'use client'
import React from 'react'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from './themeSlice'
import { MoonIcon, SunIcon } from 'lucide-react'
const ThemeChangerButton = () => {

    const mode = useSelector((state:RootState )=>state.theme.mode)
    const dispatch=useDispatch()
  return (
    <div className={mode==='light'?`bg-white text-black  relative  `:`bg-gray-800 text-white h-full relative `}>
        <button className=' lg:top-[120] absolute lg:mt-2 m-4 lg:right-120 p-2 rounded-[50%] border-2 border-amber-50 cursor-pointer ' onClick={()=>dispatch(toggleMode())}>
            {mode==='light'? <MoonIcon/>:<SunIcon/>}
            
        </button>
    </div>
  )
}

export default ThemeChangerButton