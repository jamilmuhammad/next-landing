import { useContext } from "react";
import { GlobalContext } from "./GLobalState";

export const useGlobalContext = () => useContext(GlobalContext);