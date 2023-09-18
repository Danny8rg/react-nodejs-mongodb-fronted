import { useContext } from "react";
import { taskContext } from './TaskContext'

export const useTask = () => {
    const context = useContext(taskContext)
    if (!context) throw new Error('useTasks must be used within a task Provider')
    return context
}