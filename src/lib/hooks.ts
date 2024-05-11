import { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore


//export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//export const useAppSelector = useSelector.withTypes<RootState>()
//export const useAppStore = useStore.withTypes<AppStore>()