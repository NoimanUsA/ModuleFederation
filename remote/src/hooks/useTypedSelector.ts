import { TypedUseSelectorHook, useSelector } from "react-redux";
import rootReducers from '@/store/reducers';

type RootReducer = ReturnType<typeof rootReducers>;


export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;