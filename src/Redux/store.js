import { configureStore } from "@reduxjs/toolkit";
import SideBarBurgerMenuBtnSlice from "./SideBarBurgerMenuBtnSlice";

export const store = configureStore({
  reducer: {
    burgerMenuBtn: SideBarBurgerMenuBtnSlice,
  },
});
