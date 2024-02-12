
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks/hooks"
import { addTodo } from "@/redux/features/todoSlice"



function AddTodoModal() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch()

  

  const handleSubmit = (e)=>{
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7)

    console.log(randomString)

    const data = {
      id: randomString,
      title,
      description
    }
    dispatch(addTodo(data))
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