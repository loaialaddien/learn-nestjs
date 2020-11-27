import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//controller is responsible for handling requests and returning responses
//bound to a specific path /foo/bar
//it contains handlers like get,post,delete
//can take advantage of dependency injection to consume providers

//controller is defined by decorating a class with @Controller
//the decorator takes the path, like @Controller("/app")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  //handlers are methods like get,post,delete
  //any get request that will be "/" will be handled by this request
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
