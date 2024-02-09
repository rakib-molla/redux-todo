import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
   return (
      <Container>
         <h1 className="text-center my-10 font-semibold">My Todos </h1>
         <TodoContainer/>
      </Container>
   );
};

export default Todo;
