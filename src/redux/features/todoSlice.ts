import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
   title: string,
   description: string,
   isCompleted?: boolean
}

const initialState : TTodo = {
   todos: [],
}

const toSlice = createSlice({
   name: 'todo',
   initialState,
   reducers:{
      addTodo: (state, action: PayloadAction<TTodo>)=>{
         state.todos.push({ ...action.payload, isCompleted: false })
      },
   }
})

export const {addTodo} = toSlice.actions;

export default toSlice.reducer;