import { Controller, Get } from '@nestjs/common';
//nest g controller tasks
//any request coming to /tasks will be handled by this controller
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks(): Array<number> {
    return [];
  }
}
