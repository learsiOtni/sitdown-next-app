"use client";

// in order to use makeStore, this client component will create the store and share it using the react-redux provider component
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';


export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{ children }</Provider>;
}

/* 
We are ensuring that this client component is re-render safe by checking the value of the reference 
to ensure that the store is only created once.
Only rendered once per request on serve, but can be re-rendered multiple times on client side,
if there are stateful client components located above this component in the tree, or if this component
also contains other mutable state that causes a re-render.

To interact with the Redux store, it needs to be client component.
Next step is to include the StoreProvider in the appropriate tree.
*/

/* Loading Initial Data

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { initializeCount } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
  count,
  children
}: {
  count: number
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
*/
