import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TaskService {
  private tasks:Task[] = [];

  getAllTasks():Task[] {
    return this.tasks;
  }
  createTask(name:string){
    let id:number =Math.floor(Math.random() * 1000) ;
    let age:number = Math.floor(Math.random( )*100);
    const task:Task={
      id,
      name,
      age,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task);
    return task;
    
  }
  
  getTaskById(id:number):Task{
    return this.tasks.find(tasks=>tasks.id==id)
  }

  deleteTask(id:number):Task{
    this.tasks = this.tasks.filter(task=>task.id!=id);
    return;
    
  }

  updateTaskStatus(id:number,TaskStatus:TaskStatus):Task{
    let task = this.getTaskById(id)
    task.status = TaskStatus
    return task
  }
}
