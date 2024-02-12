import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
   id: string,
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
      removeTodo: (state, action: PayloadAction<string>)=>{
        state.todos =  state.todos.filter((item)=> item.id !== action.payload)
      }
   }
})

export const {addTodo,removeTodo} = toSlice.actions;

export default toSlice.reducer;