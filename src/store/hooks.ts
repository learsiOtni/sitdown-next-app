import { useDispatch, useSelector, useStore } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch, AppStore} from './store'

// use throughout your app instead of plain 'useDispatch' and 'useSelector' 
// use typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch //Dispatch does not know about thunks, saves you from forgetting to import AppDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // saves you the need to type (state: RootState)
export const useAppStore: () => AppStore = useStore