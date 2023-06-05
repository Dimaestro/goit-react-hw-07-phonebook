import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 1,
    perPage: 3,
    visible: false,
  },
  reducers: {
    countPage(state, action) {
      state.perPage += action.payload
    },
    toggleVisible(state) {
      
    }
  }
})

export const {countPage, toggleVisible} = paginationSlice.actions
export default paginationSlice;