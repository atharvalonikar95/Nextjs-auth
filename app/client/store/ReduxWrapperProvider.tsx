'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ReduxProvider from './ReduxProvider'
import ThemeProvider from './ThemeProvider'
import Navbar from '../NavBar/page'

const ReduxWrapperProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
        <ReduxProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </ReduxProvider>
    </Provider>
  )
}

export default ReduxWrapperProvider