import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks():Task[]
  {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body('name') name:string):Task{
    return this.taskService.createTask(name);

  }
  @Get('/:id')
  getTaskBtId(@Param('id') id:number):Task{
  return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id')id:number){
    this.taskService.deleteTask(id);
    return `${id} task is deleted`;
  }

  @Patch('/:id')
  updateTaskStatus(@Param('id')id:number, @Body('status') status:TaskStatus):Task{
    return this.taskService.updateTaskStatus(id,status)
  }
}
