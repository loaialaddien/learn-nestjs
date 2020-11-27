import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //appModule is the root module
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
