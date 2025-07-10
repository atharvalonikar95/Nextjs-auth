'use client'

import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';


export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  // const mode = useSelector((state:RootState)=>state.theme.mode)
  return  <Provider store={store} >
              {children}
          </Provider>;
}
