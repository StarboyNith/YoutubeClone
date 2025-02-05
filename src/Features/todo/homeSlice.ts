import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  activeTab:"Home"
};

export const homeSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    tooggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    tooggleActiveTab:(state,actions)=>{
        state.activeTab = actions.payload
    }
  },
});

export const { tooggleSidebar,tooggleActiveTab } = homeSlice.actions;

export default homeSlice.reducer;
