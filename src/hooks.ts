import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

// typescript friendly version of useSelector() to get redux values
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector