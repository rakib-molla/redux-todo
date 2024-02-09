import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   todos: [],
}

const toSlice = createSlice({
   name: 'todo',
   initialState,
   reducers:{

   }
})

export default toSlice.reducer;