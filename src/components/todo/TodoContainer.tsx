import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./todoCard";



const TodoContainer = () => {
   return (
      <div >
         <div className="flex items-center justify-between p-5">
            
            <AddTodoModal/>
            <Button className="font-semibold">Filter</Button>
         </div>
         <div className="bg-primary-gradient w-full  rounded-xl p-1 ">

            <div className="bg-white w-full p-5 rounded-lg space-y-3">
               <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            </div>
            {/* <div className="bg-white flex items-center justify-center font-bold p-2 rounded-md">
               <p>There is no task available</p>
            </div> */}
            
         </div>
      </div>
   );
}

export default TodoContainer;