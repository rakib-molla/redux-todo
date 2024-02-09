import TodoCard from "./todoCard";



const TodoContainer = () => {
   return (
      <div >
         <div>
            <button>Add Todo</button>
            <button>Filter</button>
         </div>
         <div className="bg-red-500 w-full  rounded-xl p-5 space-y-3">
            {/* <div className="bg-white flex items-center justify-center font-bold p-2 rounded-md">
               <p>There is no task available</p>
            </div> */}
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
         </div>
      </div>
   );
}

export default TodoContainer;