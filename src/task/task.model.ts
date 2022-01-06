export interface Task {
    id:number,
    name:string,
    age:number,
    status
}

export enum TaskStatus{
    Done = "DONE",
    IN_PROGRESS = "IN_PROGRESS",
    OPEN = "OPEN"
}