export interface Task {
    _id: string
    title: string
    description?: string
    done?: boolean;
    createdAt?: Date
    updatedAt?: Date
}

export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updateAt' >;
export type UpdateTask = Partial<CreateTask>