
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks/hooks"
import { addTodo } from "@/redux/features/todoSlice"
import { useAddTodoMutation } from "@/redux/api/api"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"



function AddTodoModal() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');



  // ! for local state management 
  // const dispatch = useAppDispatch()

  // for server state management
  // ? [actualFunctionForPost, {data, isLoading, isSuccess, isError,}] = mutate();
  const  [addTodo, {isLoading, data,  isError, isSuccess }] = useAddTodoMutation();
  
  console.log({data,isLoading, isSuccess, isError});

  const handleSubmit = (e)=>{
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);


    const taskDetails = {
      title,
      description,
      isCompleted: false,
      priority,
    }

  // ! for local state management 
    // dispatch(addTodo(taskDetails))

    console.log('Inside modal', taskDetails)

    addTodo(taskDetails)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Please fill the task bufffon 
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" onBlur={(e)=>setTitle(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" onBlur={(e)=> setDescription(e.target.value)} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              priority
            </Label>
            <Select onValueChange={(value)=>setPriority(value)}>
      <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <DialogClose asChild >
          <Button type="submit">Save changes</Button>
        </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddTodoModal