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
    <div className={mode==='light'?` text-black  `:`bg-gray-800 text-white   `}>
        <button className='  hover:outline-white     rounded-[50%]  border-amber-50 cursor-pointer hover:cursor-pointer ' onClick={()=>dispatch(toggleMode())}>
            {mode==='light'? <MoonIcon/>:<SunIcon/>}
            
        </button>
    </div>
  )
}

export default ThemeChangerButton