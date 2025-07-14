'use client'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from './store'
import ThemeChangerButton from './ThemeChangerButton'

const ThemeProvider = ({ children }:{children:React.ReactNode}) => {
    const mode = useSelector((state: RootState) => state.theme.mode)
  return (
    <Provider store={store}>
        <div className={mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-500 text-black'}>
            <div >
                <ThemeChangerButton/>
            </div>
            {children}
        </div>
    </Provider>
  )
}

export default ThemeProvider