import { useAppSelector } from "@/redux/hooks/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./todoCard";

import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos} = useAppSelector((state)=> state.todos);
  // console.log(todos)

  const {data: todos, isLoading, } = useGetTodosQuery(undefined);


  if(isLoading){
    return <p>Loading....</p>
  }

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full  rounded-xl p-1 ">
        <div className="bg-white w-full p-5 rounded-lg space-y-3">
          {
            todos?.data?.map((item)=>(
              <TodoCard {...item} key={item.id}/>
            ))
          }
          
        </div>
        {/* <div className="bg-white flex items-center justify-center font-bold p-2 rounded-md">
               <p>There is no task available</p>
            </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
