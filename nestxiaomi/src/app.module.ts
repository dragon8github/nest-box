import { Module } from '@nestjs/common';
import { ToolsService } from './service/tools/tools.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [ToolsService],
})
export class AppModule {}
