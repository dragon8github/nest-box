import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { AppService } from '../../app.service'
import { LoginController } from './login/login.controller';

@Module({
  controllers: [UserController, LoginController],
  providers: [AppService]
})
export class AdminModule {}

