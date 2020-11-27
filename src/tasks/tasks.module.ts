import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
//creating a module using cli, nest g module tasks
@Module({
  controllers: [TasksController],
})
export class TasksModule {}
