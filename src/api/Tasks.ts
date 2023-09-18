const API = 'http://localhost:3000/api'
import { CreateTask, UpdateTask } from "../interfaces/task.interface"

export const createTaskRequest = (task: CreateTask) => 
    fetch(`${API}/task`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json'
        }   
        
})

export const getTaskRequest = () => fetch(`${API}/tasks`);
export const deleteTaskRequest = (id: string) => 
fetch(`${API}/tasks/${id}`,{
    method: "Delete"
})

export const updateTaskRequest = (id:string, task: UpdateTask) =>
    fetch(`${API}/tasks/${id}`,{
        method: "put",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })




  